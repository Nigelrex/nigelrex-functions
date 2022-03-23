"use strict";
// IMPORTS \\
const Util = require("util");
const Path = require("path");
const OS = require("os");
const FS = require("fs-extra");
const _ = require("lodash");
const pico = require("picocolors");

// ARRAY \\
Object.defineProperties(Array.prototype, {
	isEmpty: {
		value: function () {
			return this.length === 0;
		},
	},
	addAll: {
		value: function () {
			let output = 0;
			this.forEach((ele) => {
				if (ele % 1 !== 0) return;
				output += ele;
			});
			return output;
		},
	},
	isArray: {
		value: function () {
			return Array.isArray(this);
		},
	},
});
Object.defineProperties(String.prototype, {
	toTitleCase: {
		value: function () {
			const string = this;
			return (
				string.toLowerCase().charAt(0).toUpperCase() +
				string.slice(1)
			);
		},
	},
	stringDistance: {
		value: function (array) {
			let string = this;
			if (!typeof string === "string")
				throw new Error(`${string} is not a string`);
			if (!array.isArray())
				throw new Error(`${array} is not an array`);
			if (/\s+/g.test(string) || string === "")
				throw new Error(`Empty String`);
			string = string.split("");
			const results = [];
			string.forEach((ele) => {
				array.forEach((arre) => {
					let distance = 0;
					arre = arre.split("");
					arre.forEach((arrre) => {
						if (arrre === ele) {
							if (
								results.every(
									(rele) =>
										rele?.closestMatch !== arre.join(""),
								)
							) {
								results.push({
									closestMatch: arre.join(""),
									distance:
										string.join("").length - distance - 1,
								});
							}
							distance = 0;
						} else distance++;
					});
				});
			});

			let output = results
				.filter((e) => e.distance >= 0)
				.sort((a, b) => {
					a.distance - b.distance;
				}) ?? { closestMatch: null, distance: Infinity };
			if (
				results.filter(
					(e) => e.closestMatch === string.join(""),
				).length !== 0
			)
				output = results.filter(
					(e) => e.closestMatch === string.join(""),
				);
			return output[0];
		},
	},
});

Object.defineProperties(Date.prototype, {
	unix: {
		value: function () {
			Math.round(new Date().getTime() / 1000);
		},
	},
});
// ASYNC AWAIT \\
const asyncAwait = async (code) => {
	return await code;
};

// SLEEP\WAIT \\
const wait = Util.promisify(setTimeout);
const sleep = Util.promisify(setTimeout);

// CONSOLE.LOG \\
const log = console.log;

// INPUT \\
const input = (text = "", time = 5000) => {
	let op = undefined,
		res,
		rej,
		tO;
	if (text !== "") log(text);

	const promise = new Promise((resolve, reject) => {
		res = resolve;
		rej = reject;
		tO = setTimeout(() => {
			process.stdin.destroy();
			res(op);
		}, time);
	});
	process.stdin.on("data", (data) => {
		op = data.toString();
		process.stdin.destroy();
		clearTimeout(tO);
		res(op);
	});

	return promise;
};

const showAllParams = (object) => {
	return Util.inspect(object, false, null, true);
};
const randomString = (
	size = 12,
	includeSymbols = true,
	chars = "1234567890aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ",
	symbols = "`[]\\|{},./?<>;'\":-=+_()*&^%$#@!~",
) => {
	const randomstr = [];
	chars = chars.split("");
	if (includeSymbols) {
		symbols = symbols.split("");

		symbols.forEach((item) => {
			chars.push(item);
		});
	}

	for (let i = 0; i < size; i++) {
		randomstr.push(
			chars[
				Math.floor(Math.random() * Math.max(chars.length))
			],
		);
	}
	return randomstr.join("");
};

Object.assign(globalThis, {
	asyncAwait,
	wait,
	sleep,
	showAllParams,
	input,
	log,
	randomString,
	Util,
	OS,
	Path,
	FS,
	_,
});
