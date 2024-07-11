let heroImage = document.querySelector("#image")
let a = 0
const left = document.querySelector("#left")
const right = document.querySelector("#right")
const names = ["Butter Chicken", "Coq au Vin", "Moussaka", "Pad Thai", "Paella", "Pasta Carbonara", "Pho", "Sushi", "Tacos al Pastor", "Shakshuka"]

heroImage.addEventListener("animationiteration", function(){
	a++
	if(a>=11){
		a=1
	}
	heroImage.style.animation = "flash 10s infinite linear"
	heroImage.innerText = `${names[a-1]}`
	let itemA = document.querySelector(`#item${a}`)
	let image = window.getComputedStyle(itemA).backgroundImage
	heroImage.style.backgroundImage = image
})

left.addEventListener("click", function(){
	a = a-1
	if(a<1){
		a=10
	}
	heroImage.innerText = `${names[a-1]}`
	let itemA = document.querySelector(`#item${a}`)
	let image = window.getComputedStyle(itemA).backgroundImage
	heroImage.style.backgroundImage = image
})

right.addEventListener("click", function(){
	a = a+1
	if(a>=11){
		a=1
	}
	heroImage.innerText = `${names[a-1]}`
	let itemA = document.querySelector(`#item${a}`)
	let image = window.getComputedStyle(itemA).backgroundImage
	heroImage.style.backgroundImage = image
})

const item1 = document.querySelector("#item1")
const item2 = document.querySelector("#item2")
const item3 = document.querySelector("#item3")
const item4 = document.querySelector("#item4")
const item5 = document.querySelector("#item5")
const item6 = document.querySelector("#item6")
const item7 = document.querySelector("#item7")
const item8 = document.querySelector("#item8")
const item9 = document.querySelector("#item9")
const item10 = document.querySelector("#item10")
const information = document.querySelector("#information")

item1.addEventListener("click", function(){
	visibility = information.getAttribute("data-visible")
	if(visibility == "false"){
		information.setAttribute("data-visible", true)
		information.style.animation = "appearance 2000ms"
		information.style.animationFillMode = "forwards"
		information.innerHTML = `<h1>Butter Chicken</h1>
	<h2>Country: India</h2>
	<h2>Recipe:</h2>
	<h3>1. Marinate the Chicken:

In a large bowl, combine the yogurt, lemon juice, ginger-garlic paste, turmeric powder, chili powder, garam masala, ground cumin, and salt.
Add the chicken pieces to the marinade and mix well to coat. Cover and refrigerate for at least 1 hour, preferably overnight for best results.
2. Cook the Chicken:

Preheat your grill or oven to high heat. You can also use a skillet or grill pan.
Remove the chicken from the marinade and discard any excess marinade.
Grill or bake the chicken until fully cooked, about 5-7 minutes per side, depending on the size of the pieces. You can also cook them in a skillet until nicely browned and cooked through. Set aside.
3. Prepare the Sauce:

In a large pan, heat the butter and oil over medium heat.
Add the chopped onions and cook until golden brown.
Add the ginger-garlic paste and green chilies (if using) and sauté for 2-3 minutes until fragrant.
Stir in the turmeric powder, chili powder, ground coriander, ground cumin, and garam masala. Cook for another 2-3 minutes.
Add the tomato puree and cook, stirring occasionally, until the oil starts to separate from the tomato mixture, about 10-15 minutes.
Stir in the heavy cream and honey (if using). Simmer for 5-7 minutes, stirring occasionally.
Add salt to taste.
4. Combine Chicken and Sauce:

Add the cooked chicken pieces to the sauce and simmer for another 10 minutes to allow the flavors to meld.
Adjust seasoning if necessary.
5. Garnish and Serve:

Garnish with fresh cilantro leaves.
Serve hot with naan, roti, or steamed basmati rice.</h3>`
	}
	if(visibility == "true"){
		information.setAttribute("data-visible", false)
		information.style.animation = "disappearance 2000ms"
		information.innerHTML = ""
	}
})
 

 item2.addEventListener("click", function(){
	visibility = information.getAttribute("data-visible")
	if(visibility == "false"){
		information.setAttribute("data-visible", true)
		information.style.animation = "appearance 2000ms"
		information.style.animationFillMode = "forwards"
		information.innerHTML = `<h1>Coq au Vin</h1>
	<h2>Country: France</h2>
	<h2>Recipe:</h2>
	<h3>1.Marinate the chicken pieces in red wine overnight.
2.Remove chicken from wine and pat dry. Reserve the wine.
3.In a large pot, cook the bacon until crispy. Remove and set aside, leaving the fat in the pot.
4.Brown the chicken pieces in the bacon fat. Remove and set aside.
5.In the same pot, sauté the onion, carrots, and garlic until softened. Add mushrooms and cook until tender.
6.Stir in tomato paste and flour, cooking for 2 minutes.
7.Pour in the reserved wine, chicken broth, and brandy. Add bay leaf and thyme. Return the chicken and bacon to the pot.
8.Simmer for 1.5 to 2 hours, until the chicken is tender and the sauce has thickened.
9.Stir in butter to finish the sauce. Season with salt and pepper. Serve hot, preferably with crusty bread or over mashed potatoes.</h3>`
	}
	if(visibility == "true"){
		information.setAttribute("data-visible", false)
		information.style.animation = "disappearance 2000ms"
		information.innerHTML = ""
	}
})

 item3.addEventListener("click", function(){
	visibility = information.getAttribute("data-visible")
	if(visibility == "false"){
		information.setAttribute("data-visible", true)
		information.style.animation = "appearance 2000ms"
		information.style.animationFillMode = "forwards"
		information.innerHTML = `<h1>Moussaka</h1>
	<h2>Country: Greece</h2>
	<h2>Recipe:</h2>
	<h3>1.Preheat oven to 375°F (190°C).
2.Brush eggplant slices with olive oil and roast on a baking sheet until golden, about 20 minutes.
3.In a large skillet, brown the ground lamb or beef with the onion and garlic. Drain excess fat.
4.Add diced tomatoes, tomato paste, red wine, cinnamon, oregano, salt, and pepper. Simmer for 20 minutes.
5.In a saucepan, melt butter over medium heat. Whisk in flour and cook for 2 minutes. Gradually whisk in milk and cook until thickened. Season with nutmeg, salt, and pepper. Remove from heat and whisk in egg yolks.
6.Layer half of the eggplant slices in a baking dish. Top with meat sauce, then remaining eggplant. Pour bechamel sauce over the top and sprinkle with Parmesan cheese.
7.Bake for 45 minutes or until golden and bubbly. Let cool for 10 minutes before serving.
</h3>`
	}
	if(visibility == "true"){
		information.setAttribute("data-visible", false)
		information.style.animation = "disappearance 2000ms"
		information.innerHTML = ""
	}
})

item4.addEventListener("click", function(){
	visibility = information.getAttribute("data-visible")
	if(visibility == "false"){
		information.setAttribute("data-visible", true)
		information.style.animation = "appearance 2000ms"
		information.style.animationFillMode = "forwards"
		information.innerHTML = `<h1>Pad Thai</h1>
	<h2>Country: Thailand</h2>
	<h2>Recipe:</h2>
	<h3>1.Soak the rice noodles in warm water for 10-15 minutes until softened. Drain and set aside.
2.In a small bowl, mix together the ingredients for the sauce.
3.Heat oil in a large skillet or wok over medium-high heat. Add garlic and cook for 1 minute.
4.Add shrimp and cook until pink and cooked through. Push to the side of the pan.
5.Pour the beaten eggs into the skillet, scramble until cooked through, then combine with the shrimp.
6.Add the soaked noodles and sauce to the skillet. Toss to coat evenly.
7.Stir in the bean sprouts and cook for another 1-2 minutes.
8.Serve with crushed peanuts, green onions, lime wedges, and cilantro.
</h3>`
	}
	if(visibility == "true"){
		information.setAttribute("data-visible", false)
		information.style.animation = "disappearance 2000ms"
		information.innerHTML = ""
	}
})

item5.addEventListener("click", function(){
	visibility = information.getAttribute("data-visible")
	if(visibility == "false"){
		information.setAttribute("data-visible", true)
		information.style.animation = "appearance 2000ms"
		information.style.animationFillMode = "forwards"
		information.innerHTML = `<h1>Paella</h1>
	<h2>Country: Spain</h2>
	<h2>Recipe:</h2>
	<h3>1.Heat olive oil in a large paella pan or skillet over medium heat. Add the chicken and cook until browned. Remove and set aside.
2.In the same pan, sauté the onion and bell pepper until softened. Add garlic and cook for another minute.
3.Stir in the tomato and smoked paprika, and cook until the tomato breaks down.
4.Add the rice and saffron, stirring to coat the rice in the mixture.
5.Pour in the chicken broth, bring to a boil, then reduce heat to a simmer.
6.Return the chicken to the pan and add peas. Cover and simmer for about 15 minutes.
7.Arrange the shrimp and mussels on top of the rice. Cover and cook until the seafood is cooked through and the mussels open, about 5-7 minutes.
8.Season with salt and pepper. Garnish with lemon wedges and parsley before serving.</h3>`
	}
	if(visibility == "true"){
		information.setAttribute("data-visible", false)
		information.style.animation = "disappearance 2000ms"
		information.innerHTML = ""
	}
})

item6.addEventListener("click", function(){
	visibility = information.getAttribute("data-visible")
	if(visibility == "false"){
		information.setAttribute("data-visible", true)
		information.style.animation = "appearance 2000ms"
		information.style.animationFillMode = "forwards"
		information.innerHTML = `<h1>Pasta Carbonara</h1>
	<h2>Country: Italy</h2>
	<h2>Recipe:</h2>
	<h3>1.Cook the spaghetti according to the package instructions. Reserve 1 cup of pasta water, then drain the pasta.
2.In a bowl, whisk together the eggs, Pecorino Romano, Parmesan, and a pinch of black pepper.
3.In a large skillet, cook the pancetta over medium heat until crispy. Add the garlic and cook for another minute.
4.Add the cooked pasta to the skillet, tossing to combine with the pancetta and garlic.
5.Remove the skillet from heat and quickly stir in the egg and cheese mixture, adding reserved pasta water a little at a time to create a creamy sauce.
6.Season with salt and pepper to taste. Serve immediately.</h3>`
	}
	if(visibility == "true"){
		information.setAttribute("data-visible", false)
		information.style.animation = "disappearance 2000ms"
		information.innerHTML = ""
	}
})

item7.addEventListener("click", function(){
	visibility = information.getAttribute("data-visible")
	if(visibility == "false"){
		information.setAttribute("data-visible", true)
		information.style.animation = "appearance 2000ms"
		information.style.animationFillMode = "forwards"
		information.innerHTML = `<h1>Pho</h1>
	<h2>Country: Vietnam</h2>
	<h2>Recipe:</h2>
	<h3>1.Preheat oven to 400°F (200°C). Roast beef bones, onion, and ginger on a baking sheet for 30 minutes.
2.Transfer roasted bones, onion, and ginger to a large pot. Add beef broth, water, star anise, cinnamon stick, and cloves. Simmer for at least 2 hours, skimming any foam that rises to the surface.
3.Strain the broth and return to the pot. Stir in fish sauce and sugar. Keep warm.
4.Cook rice noodles according to package instructions. Drain and set aside.
5.Divide cooked noodles among bowls. Top with raw beef slices and ladle hot broth over the top to cook the beef.
6.Serve with fresh bean sprouts, basil, cilantro, lime wedges, sliced chili peppers, hoisin sauce, and sriracha sauce on the side.</h3>`
		}
		if(visibility == "true"){
		information.setAttribute("data-visible", false)
		information.style.animation = "disappearance 2000ms"
		information.innerHTML = ""
	}
	})

item8.addEventListener("click", function(){
	visibility = information.getAttribute("data-visible")
	if(visibility == "false"){
		information.setAttribute("data-visible", true)
		information.style.animation = "appearance 2000ms"
		information.style.animationFillMode = "forwards"
		information.innerHTML = `<h1>Sushi</h1>
	<h2>Country: Japan</h2>
	<h2>Recipe:</h2>
	<h3>1.Rinse the sushi rice under cold water until the water runs clear. Drain well.
2.Combine the rice and water in a rice cooker and cook according to the manufacturer's instructions.
3.In a small saucepan, heat rice vinegar, sugar, and salt until dissolved. Let cool.
4.Transfer the cooked rice to a large bowl and gently fold in the vinegar mixture. Let cool to room temperature.
5.Place a sheet of nori on a bamboo sushi mat. Spread a thin layer of rice over the nori, leaving a 1-inch border at the top.
6.Arrange your chosen fillings across the center of the rice.
7.Using the mat, roll the sushi tightly from the bottom, pressing gently to seal.
8.Slice the roll into bite-sized pieces and serve with soy sauce, wasabi, and pickled ginger.</h3>`
		}
		if(visibility == "true"){
		information.setAttribute("data-visible", false)
		information.style.animation = "disappearance 2000ms"
		information.innerHTML = ""
	}
})

item9.addEventListener("click", function(){
	visibility = information.getAttribute("data-visible")
	if(visibility == "false"){
		information.setAttribute("data-visible", true)
		information.style.animation = "appearance 2000ms"
		information.style.animationFillMode = "forwards"
		information.innerHTML = `<h1>Tacos al Pastor</h1>
	<h2>Country: Mexico</h2>
	<h2>Recipe:</h2>
	<h3>1.Soak the chiles in hot water until softened. Remove seeds and stems.
2.Blend the chiles with vinegar, orange juice, garlic, cumin, oregano, salt, and pepper to form a marinade.
3.Marinate the pork in the chile mixture for at least 4 hours or overnight.
4.Preheat a grill or skillet over medium-high heat. Cook the pork and pineapple slices until charred and cooked through.
5.Dice the cooked pork and pineapple. Serve on corn tortillas with diced onion, cilantro, and lime wedges.</h3>`
	}
	if(visibility == "true"){
		information.setAttribute("data-visible", false)
		information.style.animation = "disappearance 2000ms"
		information.innerHTML = ""
	}
})

item10.addEventListener("click", function(){
	visibility = information.getAttribute("data-visible")
	if(visibility == "false"){
		information.setAttribute("data-visible", true)
		information.style.animation = "appearance 2000ms"
		information.style.animationFillMode = "forwards"
		information.innerHTML = `<h1>Shakshuka</h1>
	<h2>Country: Tunisia</h2>
	<h2>Recipe:</h2>
	<h3>1.Heat olive oil in a large skillet over medium heat. Add the onion and red bell pepper and sauté until softened, about 5-7 minutes.
2.Add the garlic and cook for another minute, until fragrant.
3.Stir in the ground cumin, smoked paprika, ground coriander, and cayenne pepper (if using). Cook for 1-2 minutes, until the spices are fragrant.
4.Pour in the diced tomatoes and season with salt and pepper. Simmer for 10-15 minutes, until the sauce has thickened slightly.
5.Using the back of a spoon, make six small wells in the tomato sauce. Crack an egg into each well.
6.Cover the skillet and cook for 5-7 minutes, until the eggs are just set. For runny yolks, cook for a shorter time; for firmer yolks, cook a bit longer.
7.Garnish with chopped fresh cilantro or parsley and crumbled feta cheese, if desired.
8.Serve immediately with warm crusty bread or pita for dipping.</h3>`
	}
	if(visibility == "true"){
		information.setAttribute("data-visible", false)
		information.style.animation = "disappearance 2000ms"
		information.innerHTML = ""
	}
})