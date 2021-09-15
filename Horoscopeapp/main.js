    
    document.querySelector('button').addEventListener('click', findingHoroscope)
    
    function findingHoroscope(){
    const month = document.querySelector('#inputSignMonth').value
    const date = document.querySelector('#inputSignDay').value
    console.log(month,date)
    if (month == 03 && date >= 21 || month == 04 && date <= 19)
    
    {
		document.querySelector('h2').innerText = 'Aries: At their core, Aries do what they want and do things their way. They are unafraid of conflict, highly competitive, honest and direct. An Aries is not weighed down by the freedom of choice, and is perhaps the sign that is least conflicted about what they want.'
	}
    else if (month == 04 && date >= 20 || month == 05 && date <= 20)
    {
        document.querySelector('h2').innerText = 'Taurus: Taureans are the human equivalent of moss. A handmade wooden chair. They are normally satisfied with the way things are. They embody stability. Sitting in a patch of grass admiring the breeze. When everything else seems to be falling apart, Taureans are an oasis of calm, a rock of dependability. Practical knowledge and experience is their modus operandi. '
	}
    else
	if (month == 05 && date >= 21 || month == 06 && date <= 21)
    { 
        document.querySelector('h2').innerText = 'Gemini: Geminis are very intelligent and pick up knowledge quickly. They are perceptive, analytical, and often very funny. They have an unreserved and childlike curiosity, always asking new questions. '
	}
    else if (month == 06 && date >= 22 || month == 07 && date <= 22)
    { 
		document.querySelector('h2').innerText = 'Cancer: A Cancer’s personality is like wading chest deep in a lake of warm water. It feels sparkling and cool while it’s touching the body, but you know that if you were to dive in, it would feel warm. ' 
	}
    else if (month == 07 && date >= 23 || month == 08 && date <= 22)
    {
		document.querySelector('h2').innerText = 'Leo: Leos are bold, warm, and loving. They are also the ultimate showmen. They can dazzle with the theatrical flair of a Broadway star and the charisma of a politician. They are captivating personalities. They have a way with words, and can speak eloquently on just about any topic, no matter how quickly they’ve just been introduced to it. '
	}
    else if (month == 08 && date >= 23 || month == 09 && date <= 22)
    {
        document.querySelector('h2').innerText = 'Virgo: Virgos are known for being perfectionists. Clean freaks. They are known for their attention to detail. They can find patterns where there are none. They can be finicky and critical to a fault.'
	}
    else if (month == 09 && date >= 23 || month == 10 && date <= 23)
    {
        document.querySelector('h2').innerText = 'Libra: Libras are difficult to really understand because they seem so contradictory on the surface. They’re simultaneously extroverted and introverted, strategic and spontaneous, focused and intuitive. '
	}
    else if (month == 10 && date >= 24 || month == 11 && date <= 22)
    {
        document.querySelector('h2').innerText = 'Scorpio: The Scorpio personality is a profound chasm of infinite complexity (or at least how they project themselves). They are difficult people to get to know. They are psychological trap doors. They socialize from behind a double-sided mirror, always scanning, reading you while you can only see your own reflection. '
	}
    else if (month == 11 && date >= 23 || month == 12 && date <= 21)
    {
		document.querySelector('h2').innerText = 'Sagittarius: Sagittarius is the ultimate empiricist. They will always choose principles over feelings and will often question who they are. They move from job to job, philosophy to philosophy, belief to belief. They are explorers of the human condition and are unafraid of change. '
	}
    else if (month == 12 && date >= 22 || month == 01 && date <= 19)
    {
        document.querySelector('h2').innerText = 'Capricorn: Capricorns aren’t consumed by the need for attention, but are not immune to it. They simply don’t indulge in attention-seeking behavior. They don’t want attention for their looks or style or ingenuity. They don’t want to be admired, but they do want to be respected.'
	}
    else if (month == 01 && date >= 20 || month == 02 && date <= 18)
    {
        document.querySelector('h2').innerText = 'Aquarius: Aquarians are archetypical outcasts. This doesn’t mean they’re loners. In fact, they thrive in large groups—charming you with their peculiar senses of humor, intriguing you with fun facts about the history of disposable straws, or convincing you to join their reading group.  '
	}
    else if (month == 02 && date >= 19 || month == 03 && date <= 20)
    {
        document.querySelector('h2').innerText = 'Pisces: Describing a Pisces’ personality can be difficult because Pisces tend to evade distinction. Their behavior changes significantly based on who they’re around. Pisces are just permeable membranes that pensively let things flow through them. They are cerebral sea sponges. They are boundless. '
	}    
	else {
        document.querySelector('h2').innerText = 'Thats not a real date chieftin'
}
    }
    