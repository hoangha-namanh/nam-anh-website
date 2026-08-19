# Website Nam Anh

Website doanh nghiệp responsive bằng React/TypeScript trên nền vinext. Nội dung hiện tại là nội dung mẫu và cần được Nam Anh xác nhận trước khi công bố.

## Chạy thử

Yêu cầu Node.js 22.13 trở lên.

```bash
npm install
npm run dev
```

## Thay nội dung

- Nội dung, menu, dịch vụ, tin tức, hotline và email: `app/page.tsx`
- Tiêu đề/miêu tả Google: `app/layout.tsx`
- Màu sắc, bố cục và vùng ảnh: `app/globals.css`
- Nút Đăng nhập OMS đã trỏ tới `https://oms.namanh.asia`.

Logo hiện là khối chữ `NA`. Để dùng logo thật, đặt file tại `public/logo.png`, rồi thay `<span className="brand-mark">NA</span>` bằng `<img className="logo-image" src="/logo.png" alt="Nam Anh" />`.

Các vùng ghi `ẢNH DOANH NGHIỆP` và `ẢNH BÀI VIẾT` là placeholder. Đặt ảnh tối ưu vào `public/images/`, sau đó thêm `background-image: url('/images/ten-anh.jpg')` cho lớp tương ứng trong `app/globals.css`. Nên dùng WebP/JPG rộng 1600–2000 px, dưới 400 KB.

## Build và deploy

```bash
npm run build
```

Project có thể triển khai trên OpenAI Sites/Cloudflare hoặc nền tảng hỗ trợ Node/Vite tương thích. Sau khi hosting cấp địa chỉ, cấu hình DNS `namanh.asia` theo hướng dẫn của nhà cung cấp. Giữ DNS only trong giai đoạn xác minh domain/SSL nếu hosting yêu cầu.

## Checklist trước khi công bố

1. Thay logo và ảnh placeholder.
2. Xác nhận tên pháp lý, địa chỉ, hotline, email, mã số thuế.
3. Thay số liệu có dấu `*` bằng số liệu thật.
4. Thay ba bài tin tức mẫu và liên kết Facebook/Zalo.
5. Kết nối form với dịch vụ nhận dữ liệu nếu cần lưu khách hàng tự động.
6. Bổ sung Chính sách bảo mật và Điều khoản sử dụng.

## Cấu trúc

```text
app/page.tsx       Nội dung và cấu trúc
app/globals.css    Thiết kế responsive
app/layout.tsx     SEO và metadata
public/            Logo, ảnh, favicon
.openai/           Cấu hình Sites
```
