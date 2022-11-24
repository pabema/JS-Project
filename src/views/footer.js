export { footerTemplate }


function footerTemplate(){

    let divFooter = document.createElement("div");
    divFooter.id = 'footer';
    divFooter.innerHTML = 
    `
        <footer id="footer" class="text-center text-white bg-dark">
            <!-- Grid container -->
            <div class="container">
                <div
                    class="text-center p-3"
                    style="background-color: rgba(0, 0, 0, 0.2)"
                    >
                © 2020 Copyright:
                <a class="text-white" href="https://mdbootstrap.com/"
                    >MDBootstrap.com</a
                    >
                </div>
            </div>
            <!-- Grid container -->
        </footer>
        <!-- Footer -->
    `;

    return divFooter;

}