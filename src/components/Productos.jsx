import Producto from "./Producto"

export default function Productos() {
    return (
      <section className="products">
        <h1>Productos Destacados</h1>
        <div className="product-grid">
          < Producto imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWj4_QrinB4Msvk2sRg60VWSdEySiGPmlylg&s" nombre="Calle" precio={20000} />
          < Producto imagen="https://www.ciclismoafondo.es/uploads/s1/12/32/06/57/estas-son-las-bicicletas-de-montana-mas-baratas-con-mejor-relacion-calidad-precio.jpeg" nombre="Carrera" precio={10000} />
          < Producto imagen="https://zprintergroup.com/wp-content/uploads/2021/10/SPACE-VERDE.jpg" nombre="Montaña" precio={15000} />
          < Producto imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWj4_QrinB4Msvk2sRg60VWSdEySiGPmlylg&s" nombre="Calle" precio={14000} />
          < Producto imagen="https://www.ciclismoafondo.es/uploads/s1/12/32/06/57/estas-son-las-bicicletas-de-montana-mas-baratas-con-mejor-relacion-calidad-precio.jpeg" nombre="Carrera" precio={12000} />
          < Producto imagen="https://zprintergroup.com/wp-content/uploads/2021/10/SPACE-VERDE.jpg" nombre="Montaña" precio={8000} />
        </div>
      </section>
    )
  }