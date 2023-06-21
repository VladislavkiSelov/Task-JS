// const resultPromis = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let a = true
//         if (a) {
//             resolve([1, 2, 3, 4, 5])
//         } else {
//             reject('Error')
//         }

//     }, 2000)
// });

// resultPromis.then((res) => {
//     console.log(res);
// })

// resultPromis.catch((res) => {
//     console.log(res);
// })


// Сделайте асинхронный код, который будет генерировать случайные числа от 0 до 5. Оберните все это в промис.Пусть промис своим возвращает результат деления единицы на сгенерированное число.
// Пусть промис выполнится с ошибкой, если произошло деление на ноль, и с успехом во всех остальных случаях.

// const resultPromis = new Promise((resolve, rejected) => {
//     setTimeout(() => {
//         let res = Math.floor(Math.random() * 6);
//         if (res == false) {
//             rejected(new Error('error'))
//         } else {
//             resolve(1 / res)
//         }
//     })
// })

// resultPromis.then((res) => {
//     console.log(res);
// })

// resultPromis.catch((res) => {
//     console.log(res);
// })


// Переделайте следующий код в соответствии с изученным:

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let isError = false;

//         if (!isError) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     }, 3000);
// });


// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let isError = true;

//         if (!isError) {
//             resolve('success');
//         } else {
//             reject(new Error('error'));
//         }
//     }, 3000);
// });

// promise.then((res) => {
//     console.log(res);
// }, (res) => {
//     console.log(res);
// })

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => reject(new Error('error')), 2000);
//     setTimeout(() => resolve('ignored'), 1000);
// });
// promise.then((res) => {
//     console.log(res);
// })



// const promise = new Promise((resolve, rejected) => {
//     setInterval(() => {
//         let res = 1;
//         resolve(res)
//     }, 2000)
// })
// promise.then((res) => {
//     return ++res
// })
//     .then((res) => {
//         return new Promise((resolve, rejected) => {
//             setTimeout(() => {
//                 resolve(++res)
//             }, 5000)
//         })
//     })
//     .then((res) => {
//         return ++res
//     })
//     .then((res) => {
//         return ++res
//     })
//     .then((res) => {
//         return ++res
//     })
//     .then((res) => {
//         return ++res
//     })
//     .then((res) => {
//         console.log(res);
//     })



// Сделайте функцию, возвращающую промис, внутри которого установлена случайная задержка от 1 до 10 секунд.
// Пусть своим результатом промис возвращает эту задержку.С помощью цикла и вашей функции заполните массив 10 - ю промисами.

// function f1() {
//     return new Promise((resolve, rejected) => {
//         let sec = Math.floor(Math.random() * (11 - 1) + 1)
//         setTimeout(() => {
//             resolve(sec)
//         }, sec * 1000)
//     })
// }

// let resulPromise = f1()
// resulPromise.then((res) => {
//     const arrayPromis = []
//     for (let i = 0; i < 10; i++) {
//         let promise = new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(res)
//             }, 0)
//         })
//         arrayPromis.push(promise)
//     }
//     return Promise.all(arrayPromis)
// })
//     .then((res) => {
//         return res.reduce((ac, item) => {
//             return ac += item;
//         }, 0)
//     })
//     .then((res) => {
//         console.log(res);
//     })

// function getSmth(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(num * num), 1000)
//     });
// }

// async function func() {
//     let res = await getSmth(2);
//     console.log(res); // выведет 4
// }
// func()

// Перепишите следующий код через синхронный синтаксис:
// function getSmth(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(num * num), 1000)
//     });
// }

// function func() {
//     getSmth(2)
//         .then(res1 => {
//             getSmth(3)
//                 .then(res2 => {
//                     getSmth(4)
//                         .then(res3 => {
//                             console.log(res1 + res2 + res3);
//                         });
//                 });
//         });
// }

// func();

// async function func() {
//     const a1 = await getSmth(2);
//     const a2 = await getSmth(3);
//     const a3 = await getSmth(4);
//     console.log(a1 + a2 + a3);

// }

// func();

// Синхронный синтаксис промисов поддерживает обработку исключений через обычный try-catch:
// function getSmth(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(num * num), 1000)
//     });
// }

// async function func() {
//     try {
//         let res = await getSmth(2);
//         console.log(res);
//     } catch (err) {
//         console.log(err);
//     }
// }

// func();


// console.log('a');
// const resultPromis = new Promise((resolve, reject) => {
//     resolve([1, 2, 3, 4, 5])
// });

// resultPromis.then((res) => {
//     console.log(res);
// })

// resultPromis.catch((res) => {
//     console.log(res);
// })
// console.log('b');
