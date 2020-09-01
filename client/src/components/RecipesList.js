import React, {
    Component
} from 'react';
import { connect } from "react-redux";
import { recipesIndex } from "../actions/RecipeActions"

class RecipesList extends Component {    


    componentDidMount(){
        this.props.recipesIndex()
    }

    render() {

        const { recipes } = this.props
        
        console.log(recipes)

        return (
            <div>
                Stuff
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    }
}


export default connect( mapStateToProps, { recipesIndex })(RecipesList);