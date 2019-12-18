function takeLongTime() {
    return new Promise(resolve => {
        setTimeout(() => resolve("long_time_value"), 1000);
    });
}

takeLongTime().then(v => {
    console.log("got", v);
});

async function test() {
    const v = await takeLongTime();
    console.log(v);
}

test();
