import React, {
    Component
} from 'react';
import { connect } from "react-redux";
import { recipesIndex } from "../actions/RecipeActions"
import { Col,  Card, CardBody, Button, CardTitle, CardHeader, NavLink} from "reactstrap";

class RecipesList extends Component {    


    componentDidMount(){
        this.props.recipesIndex()
    }

    render() {

        const { recipes } = this.props

        const recipesList = recipes.recipes
        console.log(recipes)
        console.log(recipes["recipes"])
        const url = "/api/recipes/"

        console.log(recipesList)

        if (recipesList) {
            return (
                <div>
                    <Col xs={{ size: 6, offset: 3 }} >
                        <h1>All the recipes !</h1>

                        {recipesList.map((recipe => 
                            <Card body key={recipe._id}>
                            <CardHeader><h5>{recipe.title}</h5></CardHeader>
                                <CardBody>
                                    <CardTitle>{recipe.presentation}</CardTitle>
                                </CardBody>
                                <Button><NavLink href={url+recipe._id}>to the recipes !</NavLink></Button>
                            </Card>
                       ))}
                    </Col>
                </div>

              
            );
        } 
        else {
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


export default connect( mapStateToProps, { recipesIndex })(RecipesList);