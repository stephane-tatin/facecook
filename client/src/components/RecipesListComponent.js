import React, {
    Component
} from 'react';
import { connect } from "react-redux";
import { recipesIndex, recipeShow } from "../actions/RecipeActions"
import { Col,  Card, CardBody, Button, CardTitle, CardHeader, NavLink, CardText} from "reactstrap";

class RecipesList extends Component {    

    componentDidMount(){
        this.props.recipesIndex()
    }

    show(recipe) {
        this.props.recipeShow(recipe)
    }

    displaySteps = (recipe) => {

        const { steps } = recipe
        let stepsList = []
        console.log(steps.length)

        for (let i = 0; i < steps.length ; i++ ) {
            let step = "step"+(i+1)
            stepsList.push(<CardTitle> step {i+1} : {recipe.steps[i].step}</CardTitle>)
        }
        return stepsList
    }

    render() {

        const { recipes } = this.props
       

        const recipesList = recipes.recipes
        const singleRecipe = recipes.singleRecipe
        console.log(recipes)
        console.log(recipesList)
        console.log(singleRecipe)

        if (recipesList && singleRecipe == null) {
            return (
                <div>
                    <Col xs={{ size: 6, offset: 3 }} >
                        <h1>All the recipes !</h1>

                        {recipesList.map((recipe => 
                            <Card body key={recipe._id}>
                            <CardHeader><h5>{recipe.title}</h5></CardHeader>
                                <CardBody>
                                    <CardTitle>{recipe.presentation}</CardTitle>
                                     {this.displaySteps(recipe)}
                                   
                                </CardBody>
                            
                                <Button onClick={()=> this.show(recipe)}>Check it out !</Button>
                            </Card>
                       ))}
                    </Col>
                </div>

              
            );
        } 
        else if (recipesList && singleRecipe != null) {
            return (
                <div>
                <Col xs={{ size: 6, offset: 3 }} >
                    <h1>All the recipes !</h1>
    
                   
                        <Card body >
                        <CardHeader><h5>{singleRecipe.title}</h5></CardHeader>
                            <CardBody>
                                <CardTitle>{singleRecipe.presentation}</CardTitle>
                                <CardTitle>Ingredients</CardTitle>
                                {/* {singleRecipe.ingredients.map(ingredient => 
                                        <CardText> {Object.keys(ingredient)} : {ingredient[Object.keys(ingredient)]}</CardText>
                                    )} */}
                                    {/* {singleRecipe.steps.map(step => 
                                        <CardText> {Object.keys(ingredient)} : {ingredient[Object.keys(ingredient)]}</CardText>
                                    )} */}
                            </CardBody>
                          
                        </Card>

                        <Button onClick={()=> this.props.recipesIndex()}>Back to all the recipes</Button>
                
                </Col>
            </div>
            )
  
        }else {
            return (
                <div>
                  stuff
                </div>
            );
        }

    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    }
}


export default connect( mapStateToProps, { recipesIndex, recipeShow })(RecipesList);