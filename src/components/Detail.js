import React from 'react'
import { Container } from 'react-bootstrap'
import detail from './Dummy/detailbuku.png'




function Detail () {

    return(
        <>
    <Container>
    <div>
            <div
                className="container p-5"
                style={{ marginTop: "10vh", marginRight: "180px" }}
            >
                <h2 className="">Judul Buku</h2>
                <small className="text-muted">
                    ini sisa waktu dipinjam jika ada
                </small>
                <p className="mt-1">
                    Author:{" "}
                    <span style={{ color: "#FF6185" }}>Nama Pengarang</span>
                </p>
                <div className="col-md-12">
                    <div className="card shadow p-2 mb-4" style={{ width: "1000px" }}>
                        <img
                            src={detail}
                            className="card-img-top img-size-detail"
                            alt="Project image"
                        />
                        <div className="card-body mb-5 p-5">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec dui nunc mattis enim ut tellus. Id diam vel quam elementum pulvinar. A pellentesque sit amet porttitor eget dolor. Tristique nulla aliquet enim tortor at auctor urna nunc id. Purus viverra accumsan in nisl nisi scelerisque eu ultrices. Morbi tempus iaculis urna id. Orci nulla pellentesque dignissim enim sit amet venenatis. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Nec ultrices dui sapien eget mi. Penatibus et magnis dis parturient montes nascetur ridiculus mus.

In eu mi bibendum neque egestas. Sed cras ornare arcu dui vivamus. Sagittis eu volutpat odio facilisis mauris sit amet. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Montes nascetur ridiculus mus mauris. Sem viverra aliquet eget sit amet tellus cras. Proin sed libero enim sed. Sit amet volutpat consequat mauris nunc. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. In hendrerit gravida rutrum quisque non tellus orci ac. Feugiat in fermentum posuere urna nec tincidunt praesent semper. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. At quis risus sed vulputate odio ut enim.

Enim nec dui nunc mattis. Sem et tortor consequat id. Risus nullam eget felis eget. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Scelerisque in dictum non consectetur a erat nam at lectus. Morbi tempus iaculis urna id volutpat. Amet purus gravida quis blandit turpis cursus in. Aliquam ultrices sagittis orci a. Sem fringilla ut morbi tincidunt augue interdum. Et leo duis ut diam quam nulla. Egestas sed tempus urna et pharetra pharetra massa. Nibh mauris cursus mattis molestie a iaculis.

Et ligula ullamcorper malesuada proin libero nunc consequat. Diam volutpat commodo sed egestas egestas fringilla. Vel turpis nunc eget lorem. Scelerisque mauris pellentesque pulvinar pellentesque. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Ipsum consequat nisl vel pretium. Tellus molestie nunc non blandit massa enim nec dui. Gravida in fermentum et sollicitudin ac orci phasellus. Eu tincidunt tortor aliquam nulla. Nulla facilisi morbi tempus iaculis urna id volutpat. Donec ultrices tincidunt arcu non sodales neque sodales. At quis risus sed vulputate. Massa tempor nec feugiat nisl pretium fusce id.

Nunc mattis enim ut tellus elementum sagittis vitae et leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Luctus accumsan tortor posuere ac. Egestas fringilla phasellus faucibus scelerisque. Consequat semper viverra nam libero justo laoreet sit amet. Interdum varius sit amet mattis vulputate enim nulla. Facilisis sed odio morbi quis. In vitae turpis massa sed. Platea dictumst vestibulum rhoncus est. Dui sapien eget mi proin sed. Vitae elementum curabitur vitae nunc. Quis imperdiet massa tincidunt nunc pulvinar. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Aenean pharetra magna ac placerat vestibulum. Quam adipiscing vitae proin sagittis nisl rhoncus mattis.</span>
                        </div>
                            <button className='w-100 bg-button'>Pinjam Buku</button>
                    </div>
                </div>
            </div>
        </div>
    </Container>
        </>
    );
}

export default Detail;
