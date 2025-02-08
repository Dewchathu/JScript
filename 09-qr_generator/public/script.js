let logoImage = null;

document.getElementById("logoInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            logoImage = new Image();
            logoImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

function generateQRCode() {
    const qrText = document.getElementById("qrText").value;
    if (!qrText) {
        alert("Please enter some text or URL");
        return;
    }

    const qrCodeContainer = document.getElementById("qrCodeContainer");
    qrCodeContainer.innerHTML = '';

    const canvas = document.createElement("canvas");
    qrCodeContainer.appendChild(canvas);

    QRCode.toCanvas(canvas, qrText, { width: 300 }, function (error) {
        if (error) {
            console.error(error);
            return;
        }

        if (logoImage) {
            const ctx = canvas.getContext("2d");
            const drawLogo = () => {
                const logoSize = 60;
                const x = (canvas.width - logoSize) / 2;
                const y = (canvas.height - logoSize) / 2;
                ctx.drawImage(logoImage, x, y, logoSize, logoSize);
            };

            // Check if the image is already loaded
            if (logoImage.complete) {
                drawLogo();
            } else {
                logoImage.onload = drawLogo;
            }
        }

        document.getElementById("downloadButton").style.display = "inline-block";
    });
}

function downloadQRCode() {
    const canvas = document.querySelector("canvas");
    const dataUrl = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "qr-code-with-logo.png";
    link.click();
}