import { useState } from "react";
import { toast } from "react-toastify";

import { BtnDiscount, Container, TotalPrice } from "./styles";
import { FaLongArrowAltRight } from "react-icons/fa";

export function Summary({ total }) {
  const [showModal, setShowModal] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [cupom, setCupom] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  function handleApplyDiscount() {
    if (!discountApplied) {
      if (cupom === "DESCONTO10") {
        setDiscount(total * 0.1);
        toast.success("Cupom aplicado!", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setDiscountApplied(true);
      } else {
        toast.error("Código de cupom inválido!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      toast.info("Desconto já aplicado!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    setCupom("");
  }

  function handleOpenModal() {
    setShowModal(true);
  }

  const discountedTotal = total - discount;

  return (
    <Container>
      <div className="box">
        <header>Resumo da compra</header>
        <div className="info">
          <div>
            <span>Sub-total</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>
          <div>
            <span>Frete</span>
            <span>Gratuito</span>
          </div>
          <div>
            <BtnDiscount
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={handleOpenModal}
            >
              Adicionar cupom de desconto
              <FaLongArrowAltRight />
            </BtnDiscount>
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                      Adicionar cupom
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        value={cupom}
                        onChange={(e) => setCupom(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Fechar
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning text-white"
                      data-bs-dismiss="modal"
                      onClick={handleApplyDiscount}
                    >
                      Aplicar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <span>Total</span>
          <TotalPrice>
            R$ {discount > 0 ? discountedTotal.toFixed(2) : total.toFixed(2)}
          </TotalPrice>
        </footer>
      </div>
      <button>
        <a href="/">Finalizar Compra</a>
      </button>
    </Container>
  );
}
