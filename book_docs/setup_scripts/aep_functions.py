import numpy as np
import pandas as pd
import scipy.stats as st

from bokeh.models import ColumnDataSource

peak_source = ColumnDataSource(data=dict())
peak_flagged_source = ColumnDataSource(data=dict())
distribution_source = ColumnDataSource(data=dict())
qq_source = ColumnDataSource(data=dict())
datatable_source = ColumnDataSource(data=dict())
hist_source = ColumnDataSource(data=dict())


def set_up_model(df):

    mean, variance, stdev, skew = calculate_sample_statistics(np.log10(df["PEAK"]))
    model = pd.DataFrame()
    model["Tr"] = np.logspace(-3, 3, 1000)
    model["theoretical_cdf"] = 1 / model["Tr"]
    log_q = st.pearson3.ppf(
        1 - model["theoretical_cdf"], abs(skew), loc=mean, scale=stdev
    )
    model["theoretical_quantiles"] = np.power(10, log_q)

    mean, variance, stdev, skew = calculate_sample_statistics(np.log10(df["PEAK_SIM"]))
    log_q_sim = st.pearson3.ppf(
        1 - model["theoretical_cdf"], abs(skew), loc=mean, scale=stdev
    )
    model["theoretical_quantiles_sim"] = np.power(10, log_q_sim)
    return model


def run_ffa_simulation(data, n_simulations=500):
    """
    Monte Carlo simulation of measurement error.
    Reference:
    https://nbviewer.jupyter.org/github/demotu/BMC/blob/master/notebooks/CurveFitting.ipynb
    """

    peak_values = data[["PEAK"]].to_numpy().flatten()
    years = data[["YEAR"]].to_numpy().flatten
    flags = data[["SYMBOL"]].to_numpy().flatten

    data = calculate_distributions(peak_values, years, flags)
    model = set_up_model(data)

    simulation_matrix = np.tile(peak_values, (n_simulations, 1))

    msmt_error_params = calculate_measurement_error_params(peak_values)

    simulated_error = np.apply_along_axis(
        randomize_msmt_err, 1, simulation_matrix, msmt_err_params=msmt_error_params
    )

    exceedance = 1 - model["theoretical_cdf"].values.flatten()

    simulation = np.apply_along_axis(
        LP3_calc, 1, simulated_error, exceedance=exceedance
    )

    model["lower_1s_bound"] = np.apply_along_axis(np.percentile, 0, simulation, q=33)
    model["upper_1s_bound"] = np.apply_along_axis(np.percentile, 0, simulation, q=67)
    model["lower_2s_bound"] = np.apply_along_axis(np.percentile, 0, simulation, q=5)
    model["upper_2s_bound"] = np.apply_along_axis(np.percentile, 0, simulation, q=95)
    model["expected_value"] = np.apply_along_axis(np.percentile, 0, simulation, q=50.0)
    model["mean"] = np.apply_along_axis(np.mean, 0, simulation)

    return model


def randomize_msmt_err(val, msmt_err_params):
    msmt_error = val * msmt_err_params[0] + msmt_err_params[1]
    return val * np.random.uniform(low=1.0 - msmt_error, high=1.0 + msmt_error)


def LP3_calc(data, exceedance):
    # calculate the log-pearson III distribution
    mean, variance, stdev, skew = calculate_sample_statistics(np.log10(data))
    lp3_model = st.pearson3.ppf(exceedance, abs(skew), loc=mean, scale=stdev)
    return np.power(10, lp3_model)


def calculate_measurement_error_params(data):
    """
    Assume measurement error is a linear function
    of magnitude of flow.
    """
    assumed_peak_measurement_error = (10, 25)  # %
    min_e, max_e = np.divide(assumed_peak_measurement_error, 100.0)
    min_q, max_q = min(data), max(data)
    m = (max_e - min_e) / (max_q - min_q)
    b = min_e - m * min_q
    return (m, b)


def calculate_sample_statistics(x):
    return (np.mean(x), np.var(x), np.std(x), st.skew(x))


def calc_simulated_msmt_error(data):
    msmt_error_params = calculate_measurement_error_params(data["PEAK"])
    return [randomize_msmt_err(v, msmt_error_params) for v in data["PEAK"]]


def calculate_distributions(peak_values, years, flags):
    """
    Calculate return period, and empirical and theoretical CDF series.
    """
    n_sample = len(peak_values)
    data = pd.DataFrame()
    data["PEAK"] = peak_values
    data["PEAK_SIM"] = calc_simulated_msmt_error(data)
    data["YEAR"] = years
    data["SYMBOL"] = flags

    mean, variance, stdev, skew = calculate_sample_statistics(np.log10(data["PEAK"]))
    data["Tr"] = (n_sample + 1) / data["PEAK"].rank(ascending=False)
    data["empirical_cdf"] = st.pearson3.cdf(
        np.log10(data["PEAK"]), abs(skew), loc=mean, scale=stdev
    )
    data["theoretical_cdf"] = 1 - 1 / data["Tr"]
    data["theoretical_quantiles"] = np.power(
        10, st.pearson3.ppf(data["theoretical_cdf"], abs(skew), loc=mean, scale=stdev)
    )
    data = data.sort_values("Tr", ascending=False)

    mean, variance, stdev, skew = calculate_sample_statistics(
        np.log10(data["PEAK_SIM"])
    )

    data["Tr_sim"] = (n_sample + 1) / data["PEAK_SIM"].rank(ascending=False)
    data["empirical_cdf_sim"] = st.pearson3.cdf(
        np.log10(data["PEAK_SIM"]), abs(skew), loc=mean, scale=stdev
    )
    data["theoretical_cdf_sim"] = 1 - 1 / data["Tr_sim"]
    data["theoretical_quantiles_sim"] = np.power(
        10,
        st.pearson3.ppf(data["theoretical_cdf_sim"], abs(skew), loc=mean, scale=stdev),
    )
    return data
