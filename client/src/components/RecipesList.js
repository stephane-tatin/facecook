import React, {
    Component
} from 'react';
import { connect } from "react-redux";

class RecipesList extends Component {    
    render() {
        const { recipes } = this.state 

        console.log(recipes)

        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    }
}


export default connect(mapStateToProps)(RecipesList);