# promiseify化

回调函数转为promise

```js
function promiseify(apiFunc) {
  return function (...params) {
    // let args = [...arguments]
    // let args = arguments.slice();
    let args = Array.prototype.slice.apply(arguments);
    console.log(params);

    return new Promise((resove, reject) => {
      // let callbackArg = args[apiFunc.length - 1]
      let newCallback = (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        resove(data);
      };
      apiFunc.apply(this, [...args, newCallback]);
    });
  };
}

function api1(arg1, arg2, callback) {
  callback(`error, ${arg1}, ${arg2}`, `data, ${arg1}, ${arg2}`);
}

api1(1, 2, function (e, data) {
  if (e) {
    // on error
    console.log('callback error', e);
  }
  // data
  console.log('callback data ',data);
});

api1P = promiseify(api1);

api1P(1, 2)
  .then((data) => {
    console.log(`then-${data}`);
  })
  .catch((e) => {
    console.log(`catch-${e}`);
  });
// api1P.call(ctx)

```