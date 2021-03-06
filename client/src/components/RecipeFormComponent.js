import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { connect } from "react-redux"
import { recipeStore, recipeShow, imageRecipeStore} from '../actions/RecipeActions';

class RecipeFormComponent extends Component {
 
    state = {
        recipe : {
            title: "",
            presentation: "",
            file : "",
            userId : 555,
            steps : []
            

        },
        numberOfSteps : 1
    }


    onChange = (e) => {
        this.setState({
            recipe : {
                ...this.state.recipe,
                [e.target.name] : e.target.value
            }
            
        })
    }

    onChangeSteps = (e) => {
        this.setState({
            recipe : {
                ...this.state.recipe,
                steps : [
                    ...this.state.recipe.steps,
                    {[e.target.name] : e.target.value}
                ]
                
            }
            
        })
    }

    onChangePicture = (e) => {
        console.log(e.target.name)
        console.log(e.target.files[0])
        let img = document.querySelector("#img1")
              img.src = URL.createObjectURL(e.target.files[0])
            this.setState({
                recipe: {
                    ...this.state.recipe,
                    file: [
                        {
                            [e.target.name]: e.target.files[0]
                        }
                    ]

                }

            })
        }

    onSubmit = () => {
      
        const formData = new FormData()
    
        const { recipe } = this.state
        console.log(recipe.file[0])
        formData.append('file', recipe.file[0])
        this.props.recipeStore(recipe)
        this.props.imageRecipeStore(recipe.file[0])
     
    }

    addSteps = () => {
        this.setState({
            numberOfSteps : this.state.numberOfSteps+ 1
        })
    
    }

    displaySteps = () => {
        let steps = []
        for (let i = 0; i < this.state.numberOfSteps; i++) {
            let placeholder = "step " + (i+1)
            let name = "step"+(i+1)
            steps.push(<Input type="text" placeholder={placeholder} onChange={this.onChangeSteps} name={name}></Input>)
        }
        return steps

    }


    render() { 
        return (<div>
            
            <Form>
        
                <FormGroup>
                    <Input onChange={this.onChangePicture} type="file" name="file" id="pictureInput" accept=".jpg, .jpeg, .png"></Input>
                    
                        <img id="img1" src="" height="200"></img> 
                    
                </FormGroup>
                <FormGroup>
                    <Label>Title of your recipe</Label>
                    <Input onChange={this.onChange} type="text" placeholder="What id the name of your recipe ?"  name="title"></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Presentation</Label>
                    <Input onChange={this.onChange} type="text" placeholder="Say something about your recipe"  name="presentation"></Input>
                </FormGroup>
                
                <FormGroup>
                    <Label>Steps</Label>
                {this.displaySteps()}
                </FormGroup>
               
                <Button onClick={this.addSteps}>add steps</Button>

                <Button type="button" onClick={this.onSubmit}>Submit</Button>
            </Form>

        </div> );
    }
}

 
export default connect(null, {recipeStore, imageRecipeStore})(RecipeFormComponent);