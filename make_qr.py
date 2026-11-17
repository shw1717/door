import qrcode

# 3단계에서 확인한 실제 주소로 바꾸세요 (끝의 / 포함)
URL = "http://shw1717.github.io/door/"

qr = qrcode.QRCode(
    error_correction=qrcode.constants.ERROR_CORRECT_H,  # 오류 정정 높음
    box_size=20,   # 칸 하나의 픽셀 크기: 클수록 고해상도
    border=4,      # 바깥 여백: 줄이지 마세요
)
qr.add_data(URL)
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")
img.save("qr.png")
print("qr.png 저장 완료:", URL)