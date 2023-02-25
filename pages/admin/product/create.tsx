import React, { Component } from "react";

export default class createProduct extends Component {
  render() {
    return (
      <div className="container">
        <form action="" method="post">
          <div className="input-group mb3">
            <span className="input-group-text">Nome:</span>
            <input type="text" id="identificador" className="form-control" />
          </div>
          <div className="input-group mb3">
            <span className="input-group-text">Preço:</span>
            <input type="number" id="identificador" className="form-control" />
          </div>
          <div className="input-group mb3">
            <span className="input-group-text">Descrição:</span>
            <textarea id="identificador" className="form-control"></textarea>
          </div>
          <div className="container">
            <h5>Dimensões:</h5>
            <div className="input-group mb3">
              <span className="input-group-text">Altura:</span>
              <input type="text" id="identificador" className="form-control" />
            </div>
            <div className="input-group mb3">
              <span className="input-group-text">Largura:</span>
              <input type="text" id="identificador" className="form-control" />
            </div>
            <div className="input-group mb3">
              <span className="input-group-text">Comprimento:</span>
              <input type="text" id="identificador" className="form-control" />
            </div>
            <div className="input-group mb3">
              <span className="input-group-text">Peso:</span>
              <input type="text" id="identificador" className="form-control" />
            </div>
          </div>
          <div>
            <h5>Imagens:</h5>
            <div className="input-group mb3">
              <span className="input-group-text">Url:</span>
              <input type="url" id="identificador" className="form-control" />
            </div>
            <div className="input-group mb3">
              <span className="input-group-text">alt:</span>
              <input type="text" id="identificador" className="form-control" />
            </div>
          </div>
          <div>
            <h5>Categorias:</h5>
          </div>
          <div>
            <h5>Propriedades:</h5>
          </div>
        </form>
      </div>
    );
  }
}
