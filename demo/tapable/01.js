const {
    SyncHook,
    SyncBailHook,
    SyncWaterfallHook,
    SyncLoopHook,
    AsyncParallelHook,
    AsyncParallelBailHook,
    AsyncSeriesHook,
    AsyncSeriesBailHook,
    AsyncSeriesWaterfallHook
} = require('tapable');

const hook = new SyncHook(['arg1', 'arg2', 'arg3']);
hook.tap('hello', (args) => {
    console.log(args)
})
hook.tap('hello word', (args) => {
    console.log(args)
})
hook.tap('xianjs', (args) => {
    console.log(args)
})
hook.call('hello')


