window.SIDEBAR_ITEMS = {"enum":[["Error",""],["PrometheusError","The error types for prometheus."]],"fn":[["exponential_buckets","Create `count` buckets, where the lowest bucket has an upper bound of `start` and each following bucket’s upper bound is `factor` times the previous bucket’s upper bound. The final +Inf bucket is not counted and not included in the returned slice. The returned slice is meant to be used for the Buckets field of [`HistogramOpts`]."],["init_prometheus","Initializes the metrics context, and starts an HTTP server to serve metrics."],["register",""]],"struct":[["Counter","The underlying implementation for [`Counter`] and [`IntCounter`]."],["F64","A atomic float."],["Gauge","The underlying implementation for [`Gauge`] and [`IntGauge`]."],["Histogram","A [`Metric`] counts individual observations from an event or sample stream in configurable buckets. Similar to a `Summary`, it also provides a sum of observations and an observation count."],["HistogramOpts","A struct that bundles the options for creating a [`Histogram`] metric. It is mandatory to set Name and Help to a non-empty string. All other fields are optional and can safely be left at their zero value."],["I64","A atomic signed integer."],["Opts","A struct that bundles the options for creating most [`Metric`] types."],["Registry","A struct for registering Prometheus collectors, collecting their metrics, and gathering them into `MetricFamilies` for exposition."],["SourcedMetric","A metric whose values are obtained from an existing source, instead of being independently recorded."],["U64","A atomic unsigned integer."]],"trait":[["MetricSource","A source of values for a [`SourcedMetric`]."]],"type":[["CounterVec","The underlying implementation for [`CounterVec`] and [`IntCounterVec`]."],["GaugeVec","The underlying implementation for [`GaugeVec`] and [`IntGaugeVec`]."],["HistogramVec","A [`Collector`] that bundles a set of Histograms that all share the same [`Desc`], but have different values for their variable labels. This is used if you want to count the same thing partitioned by various dimensions (e.g. HTTP request latencies, partitioned by status code and method)."],["SourcedCounter","A counter whose values are obtained from an existing source."],["SourcedGauge","A gauge whose values are obtained from an existing source."]]};