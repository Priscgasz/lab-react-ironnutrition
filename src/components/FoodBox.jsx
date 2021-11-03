import React, { Component } from 'react'

export class FoodBox extends Component {
state ={ quantity: this.props.foods.quantity }

    render() {
        return (
                <div className="box">
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img src={this.props.foods.image} alt="food"/>
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>{this.props.foods.name}</strong> <br />
                        <small>{this.props.foods.calories}</small>
                      </p>
                    </div>
                  </div>
                  <div className="media-right">
                    <div className="field has-addons">
                      <div className="control">
                        <input className="input" type="number" value={this.state.quantity} />
                      </div>
                      <div className="control">
                        <button className="button is-info">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
            </div>
        )
    }
}

export default FoodBox
