 let arr = ['молоко', 'пиво', 'пиво', 'молоко', 'молоко'];
    for (let elem of arr) {
	if (elem  === 'молоко') {
        console.log('плохо');
    }
    else if (elem  === 'пиво') {
		console.log('хорошо');
	}
}