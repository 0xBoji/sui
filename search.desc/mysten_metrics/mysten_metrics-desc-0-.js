searchState.loadedDescShard("mysten_metrics", 0, "Increments gauge when acquired, decrements when guard drops\nMonitorCancellation records a cancelled = true span …\nA service to manage the prometheus registries. This …\nAdd a new entry to the ServerTiming header. If the caller …\nCount number of in flight futures running\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet the currently active ServerTiming context. Only …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nProvides wrappers to tokio mpsc channels, with metrics on …\nThis function creates a named scoped object, that keeps …\nCreate a metric that measures the uptime from when this …\nCreate a new task-local ServerTiming context and run the …\nCreate a new task-local ServerTiming context and run the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAllows to specify percentiles in 1/1000th, e.g. 90pct is …\nA newtype for an <code>mpsc::Permit</code> which allows us to inject …\nAn <code>mpsc::Receiver</code> with an <code>IntGauge</code> counting the number of …\nStream API Wrappers! A wrapper around …\nAn <code>mpsc::Sender</code> with an <code>IntGauge</code> counting the number of …\nAn <code>mpsc::WeakSender</code> with an <code>IntGauge</code> counting the number …\nReturns the current capacity of the channel.\nConstructor Similar to <code>mpsc::channel</code>, <code>channel</code> creates a …\nDeprecated: use <code>monitored_mpsc::channel</code> instead.\nCloses the receiving half of a channel without dropping it.\nCloses the receiving half of a channel without dropping it.\nCompletes when the receiver has dropped.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns a reference to the underlying gauge.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet back the inner <code>Receiver</code>.\nChecks if the channel has been closed. This happens when …\nCreate a new <code>ReceiverStream</code>.\nPolls to receive the next message on this channel. …\nReceives the next value for this receiver. Decrements the …\nWaits for channel capacity. Once capacity to send one …\nSends a value, waiting until there is capacity. Increments …\nAttempts to receive the next value for this receiver. …\nTries to acquire a slot in the channel without waiting for …\nAttempts to immediately send a message on this <code>Sender</code> …\nA newtype for an <code>mpsc::Permit</code> which allows us to inject …\nWraps <code>mpsc::Receiver</code> with gauges counting the inflight and …\nWraps <code>mpsc::Sender</code> with gauges counting the sent and …\nWraps <code>mpsc::UnboundedReceiver</code> with gauges counting the …\nWraps <code>mpsc::UnboundedSender</code> with gauges counting the sent …\nWraps <code>mpsc::WeakSender</code> with gauges counting the sent and …\nWraps <code>mpsc::WeakUnboundedSender</code> with gauges counting the …\nReturns the current capacity of the channel.\nWraps <code>mpsc::channel()</code> to create a pair of <code>Sender</code> and …\nCloses the receiving half of a channel without dropping it.\nCloses the receiving half of a channel without dropping it.\nCompletes when the receiver has dropped.\nCompletes when the receiver has dropped.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nChecks if the channel has been closed. This happens when …\nChecks if the channel has been closed. This happens when …\nPolls to receive the next message on this channel. …\nPolls to receive the next message on this channel. …\nReceives the next value for this receiver. Decrements the …\nReceives the next value for this receiver. Decrements the …\nWaits for channel capacity. Once capacity to send one …\nSends a value, waiting until there is capacity. Increments …\nSends a value, waiting until there is capacity. Increments …\nAttempts to receive the next value for this receiver. …\nAttempts to receive the next value for this receiver. …\nTries to acquire a slot in the channel without waiting for …\nAttempts to immediately send a message on this <code>Sender</code> …\nWraps <code>mpsc::unbounded_channel()</code> to create a pair of …\nMonitors temporary stalls in tokio scheduling every …")