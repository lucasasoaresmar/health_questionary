let questions = {
	health: 0,
	age: 0,
	t_a: 0,
	t_b: 0,
	t_c: 0,
	t_d: 0,
	t_e: 0,
	t_f: 0,
	t_g: 0,
	t_h: 0,
	t_i: 0,
	t_j: 0,
	fo_a: 0,
	fo_b: 0,
	fo_c: 0,
	fo_d: 0,
	fi_a: 0,
	fi_b: 0,
	fi_c: 0,
	family: 0,
	pain: 0,
	work: 0,
	n_a: 0,
	n_b: 0,
	n_c: 0,
	n_d: 0,
	n_e: 0,
	n_f: 0,
	n_g: 0,
	n_h: 0,
	n_i: 0,
	social: 0,
	e_a: 0,
	e_b: 0,
	e_c: 0,
	e_d: 0
};

let score = {};
let domain = {};

function getAllValues() {
	Object.getOwnPropertyNames(questions).forEach(function(name) {
		questions[name] = parseInt(document.querySelector(`input[name=${name}]:checked`).value);
	}
	);
}

function transformData() {

	//Questão 1
	switch (questions.health) {
		case 1:
		score.first = 5;
		break;
		case 2:
		score.first = 4.4;
		break;
		case 3:
		score.first = 3.4;
		break;
		case 4:
		score.first = 2;
		break;
		case 5:
		score.first = 1;
		break;
	}

	//Questão 2
	score.second = questions.age;

	//Questão 3
	score.third =
	questions.t_a +
	questions.t_b +
	questions.t_c +
	questions.t_d +
	questions.t_e +
	questions.t_f +
	questions.t_g +
	questions.t_h +
	questions.t_i +
	questions.t_j;

	 //Questão 4
	 score.forth =
	 questions.fo_a +
	 questions.fo_b +
	 questions.fo_c +
	 questions.fo_d;

	 //Questão 5
	 score.fifth =
	 questions.fi_a +
	 questions.fi_b +
	 questions.fi_c;

	 //Questão 6
	 switch (questions.family) {
	 	case 1:
	 	score.sixth = 5;
	 	break;
	 	case 2:
	 	score.sixth = 4;
	 	break;
	 	case 3:
	 	score.sixth = 3;
	 	break;
	 	case 4:
	 	score.sixth = 2;
	 	break;
	 	case 5:
	 	score.sixth = 1;
	 	break;
	 }

	//Questão 7
	switch (questions.pain) {
		case 1:
		score.seventh = 6;
		break;
		case 2:
		score.seventh = 5.4;
		break;
		case 3:
		score.seventh = 4.2;
		break;
		case 4:
		score.seventh = 3.1;
		break;
		case 5:
		score.seventh = 2;
		break;
		case 6:
		score.seventh = 1;
	}

	//Questão 8
	if (questions.pain == 1) {
		score.eigth = 6;
	} else if (questions.pain >= 2) {
		switch (questions.work) {
			case 1:
			score.eigth = 5;
			break;
			case 2:
			score.eigth = 4;
			break;
			case 3:
			score.eigth = 3;
			break;
			case 4:
			score.eigth = 2;
			break;
			case 5:
			score.eigth = 1;
		}
	} /*else if (questions.health == 0) {
		switch (questions.work) {
			case 1:
			score.eigth = 6;
			break;
			case 2:
			score.eigth = 4.75;
			break;
			case 3:
			score.eigth = 3.5;
			break;
			case 4:
			score.eigth = 2.25;
			break;
			case 5:
			score.eigth = 1;
		}
	}*/ else {
		score.eigth = 0;
	}

	//Questão 9
	score.ninth = {n_a: 0, n_b: 0, n_c: 0, n_d: 0, n_e: 0, n_f: 0, n_g: 0, n_h: 0, n_i: 0};

	const ninth_questions_one = [questions.n_a, questions.n_d, questions.n_e, questions.n_h];
	const ninth_questions_two = [questions.n_b, questions.n_c, questions.n_f, questions.n_g, questions.n_i];
	const ninth_score_one = [score.ninth.n_a, score.ninth.n_d, score.ninth.n_e, score.ninth.n_h];
	const ninth_score_two = [score.ninth.n_b, score.ninth.n_c, score.ninth.n_f, score.ninth.n_g, score.ninth.n_i];

	for (var i = 0; i < ninth_questions_one.length; i++) {
		switch (ninth_questions_one[i]) {
			case 1:
			ninth_score_one[i] = 6;
			break;
			case 2:
			ninth_score_one[i] = 5;
			break;
			case 3:
			ninth_score_one[i] = 4;
			break;
			case 4:
			ninth_score_one[i] = 3;
			break;
			case 5:
			ninth_score_one[i] = 2;
			break;
			case 6:
			ninth_score_one[i] = 1;
		}
	}

	score.ninth.n_a = ninth_score_one[0];
	score.ninth.n_d = ninth_score_one[1];
	score.ninth.n_e = ninth_score_one[2];
	score.ninth.n_h = ninth_score_one[3];

	for (var j = 0; j < ninth_questions_two.length; j++) {
		ninth_score_two[j] = ninth_questions_two[j];
	}

	score.ninth.n_b = ninth_score_two[0];
	score.ninth.n_c = ninth_score_two[1];
	score.ninth.n_f = ninth_score_two[2];
	score.ninth.n_g = ninth_score_two[3];
	score.ninth.n_i = ninth_score_two[4];

	//Questão 10
	score.tenth = questions.social;

	//Questão 11
	let eleventh_partial_score_one, eleventh_partial_score_two;

	switch (questions.e_b) {
		case 1:
		eleventh_partial_score_one = 5;
		break;
		case 2:
		eleventh_partial_score_one = 4;
		break;
		case 3:
		eleventh_partial_score_one = 3;
		break;
		case 4:
		eleventh_partial_score_one = 2;
		break;
		case 5:
		eleventh_partial_score_one = 1;
	}

	switch (questions.e_d) {
		case 1:
		eleventh_partial_score_two = 5;
		break;
		case 2:
		eleventh_partial_score_two = 4;
		break;
		case 3:
		eleventh_partial_score_two = 3;
		break;
		case 4:
		eleventh_partial_score_two = 2;
		break;
		case 5:
		eleventh_partial_score_two = 1;
	}

	score.eleventh = eleventh_partial_score_one + eleventh_partial_score_two + questions.e_a + questions.e_c;

	domain = {
		capacidade: {point: score.third, min: 10, var: 20}, 
		limitacao: {point: score.forth, min: 4, var: 4},
		dor: {point: score.seventh + score.eigth, min: 2, var: 20},
		geral: {point: score.first + score.eleventh, min: 5, var: 20},
		vitalidade: {point: score.ninth.n_a + score.ninth.n_e + score.ninth.n_g + score.ninth.n_i, min: 4, var: 20},
		sociais: {point: score.sixth + score.tenth, min: 2, var: 8},
		emocionais: {point: score.fifth, min: 3, var: 3},
		mental: {point: score.ninth.n_b + score.ninth.n_c + score.ninth.n_d + score.ninth.n_f + score.ninth.n_h, min: 5, var: 25}
	};
}

function rawScale () {
	Object.getOwnPropertyNames(domain).forEach(function(name) {
		domain[name].result = ((domain[name].point - domain[name].min)*100/domain[name].var);
		document.getElementById(name).innerHTML = domain[name].result;
	});
}

function all () {
	getAllValues();
	transformData();
	rawScale();
}