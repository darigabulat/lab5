let column_1 = [3, 1, 5, 6, 7, 8, 9, 8, 9, 5, 3, 9, 10, 8, 6, 4, 8, 4, 10, 9, 9, 7, 9, 2, 5, 6, 6, 7, 9, 4];
let column_2 = [1, 8, 7, 3, 9, 1, 2, 2, 9, 5, 8, 7, 5, 8, 6, 2, 4, 8, 4, 5, 6, 6, 9, 7, 7, 3, 5, 1, 9, 2];
let column_3 = [51, 67, 71, 71, 74, 87, 51, 80, 82, 47, 47, 66, 74, 69, 87, 66, 51, 60, 77, 49, 88, 65, 96, 40, 92, 54, 49, 90, 85, 70];
let column_4 = [62, 72, 66, 53, 84, 63, 76, 80, 82, 73, 87, 66, 59, 74, 50, 75, 69, 81, 76, 71, 95, 64, 47, 86, 95, 72, 47, 92, 69, 89];
let i;

let sum_1 = 0;
for (i = 0; i < column_1.length; i++) {
	sum_1 = sum_1 + column_1[i];
}

let sum_2 = 0;
for (i = 0; i < column_2.length; i++) {
	sum_2 = sum_2 + column_2[i];
}

let sum_3 = 0;
for (i = 0; i < column_3.length; i++) {
	sum_3 = sum_3 + column_3[i];
}

let sum_4 = 0;
for (i = 0; i < column_4.length; i++) {
	sum_4 = sum_4 + column_4[i];
}

let sums = [sum_1, sum_2, sum_3, sum_4];

let total_score = 0;
for (i = 0; i < sums.length; i++) {
	total_score = total_score + sums[i];
}

const results = {
	col1: column_1,
	col2: column_2,
	col3: column_3,
	col4: column_4,
	sums: sums,
	total_score: total_score
}
console.log(results);