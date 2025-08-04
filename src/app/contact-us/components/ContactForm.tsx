export default function ContactForm(){
    return(
        <>
            <section className="p3">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-12">
                            <form action="" style={{background:'#f9f9f9', padding:'30px', borderRadius:'20px'}}>
                                <div className="row">
                                    <div className="col-md-4 col-12 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="">Name</label>
                                            <input type="text" className="form-control mt-2" placeholder="John Doe" />
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-12 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="">Email</label>
                                            <input type="email" className="form-control mt-2" placeholder="abc@gmail.com" />
                                        </div>
                                    </div>
                                     <div className="col-md-4 col-12 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="">Phone Number</label>
                                            <input type="tel" className="form-control mt-2" placeholder="+971-1111-11111" />
                                        </div>
                                    </div>
                                       <div className="col-md-12 col-12 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="">Message</label>
                                            <textarea className="form-control mt-2" placeholder="How can i help you?"></textarea>
                                        </div>
                                    </div>
                                     <div className="col-md-12 col-12 mb-3 mt-3 text-center">
                                        <div className="form-group text-center">
                                        <button
                                        className="customButton d-flex gap-2 justify-content-center m-auto"
                                        style={{ alignItems:'center'}}
                                        >
                                        Contact Now
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}