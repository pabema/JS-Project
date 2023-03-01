import { contactEmail } from "../service/requests";

export { contactTemplate }

function contactTemplate(){
    let contactForm = document.createElement("div");

    if(localStorage.getItem('access_token')){
        contactForm.id = "contact";
        contactForm.innerHTML = 
    
    
        `
        <!--Section: Contact v.2-->
        <br>
        <section id="contact-form">
        <div class="mask d-flex align-items-center gradient-custom-3">
            <div class="container">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card bg-dark text-white" style="border-radius: 1rem;">
                    <div class="card-body p-5 text-center text-white">
                        <!--Section heading-->
                        <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                        <!--Section description-->
                        <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                            a matter of hours to help you.</p>
                        <div class="row">
                            <!--Grid column-->
                                <form>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="md-form mb-0">
                                                <label for="subject" class="">Subject</label>
                                                <input type="text" id="subject" name="subject" class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                    <!--Grid row-->
                                    <br>
                                    <!--Grid row-->
                                    <div class="row">
                                        <!--Grid column-->
                                        <div class="col-md-12">
                                            <div class="md-form">
                                                <label for="message">Your message</label>
                                                <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <br>
                                    <!--Grid row-->
                                    <div class="d-flex justify-content-center">
                                        <button id="enviar" class="btn btn-outline-light btn-lg px-5">Enviar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </section>
        <!--Section: Contact v.2-->
        `;
        }else{
            contactForm.innerHTML = 
            ``;
        }

        contactForm.querySelector('#enviar').addEventListener('click', async (e)=>{
            e.preventDefault();
            let email = localStorage.getItem('email');
            let subject = contactForm.querySelector('#subject').value;
            let message = contactForm.querySelector('#message').value;
            let data = {
                "email": email,
                "subject": subject,
                "message": message
            }
            await contactEmail(data, localStorage.getItem('access_token')).then(status => {
              if(status.success){
                console.log(status);
              }else{
                console.log("error");
              }
            })
            
          });


    return contactForm;
}

