const mealBtn = document.getElementById("btn");
const mealBox = document.getElementById("meal");

mealBtn.addEventListener("click", () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((res) => {
      getMeals(res.meals[0]);
    });
});

function getMeals(meal) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      //  if no more ingredients
      break;
    }
  }
  console.log(ingredients);

  mealBox.innerHTML = `    
  
            <div class="row">

                <div class="columns five">

                     <img src="${meal.strMealThumb}" alt="meal img">

                     <p><strong>Category:</strong>${meal.strCategory}</p>
                     <p><strong>Area:</strong>${meal.strArea}</p>
                     <p><strong>Tags:</strong>${meal.strTags
                       .split(",")
                       .join(", ")}</p>

                     <h5>Ingredients</h5>
                     <ul>
                       ${ingredients
                         .map(
                           (ingredient) => `
                       <li>${ingredient}</li>`
                         )
                         .join("")}
                     </ul>

               </div>

                  <div class="columns seven">

                    <h1>${meal.strMeal}</h1>
                    <p>${meal.strInstructions}</p>
                </div>


             <div class="row">
                    <h5>Video Recipe</h5>
                 <div class="videoWrapper">
                    <iframe   src="  https://www.youtube.com/embed/${meal.strYoutube.slice(
                      -11
                    )}">
                      </iframe>
                 </div>

              </div>
            </div>
                   
                
             


  
  
  
  
  `;
}
