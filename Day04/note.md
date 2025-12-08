# Display

## Block

- Luôn bắt đầu bằng 1 dòng mới.
- Mặc định chiếm 100% chiều rộng của vùng chứa.
- Dễ dàng thiết lập width, height, margin, padding

## Inline

- Không cần bắt đầu bằng 1 dòng mới.
- Chỉ chiếm đúng kích thước nội dung bên trong.
- Không thể thiết lập width, height.
- Với padding, margin thì hiệu ứng chỉ chính xác tuyệt đối theo phương ngang.
- Có một số thẻ inline đặc biệt có thể thiết lập width, height như `<img>`, `<video>`, v.v.

## Inline-Block

Khi vừa muốn có những đặc tính của `inline` lại vừa muốn có những đặc tính của `block` thì ta dùng `inline-block`.

- Vừa có thể đặt cạnh nhau như `inline`.
- Có thể thiết lập width, height, margin, padding như `block`.
- Mặc định trong thực tế không có thẻ `inline-block`, ta chỉ có thể thay đổi thuộc tính `display` của các thẻ khác thành `inline-block`.

## Display: none

- Phần tử sẽ không được hiển thị trên trang web, không thể chọn bằng chuột, không chiếm không gian trong bố cục.

- Khác với `visibility: hidden` là phần tử vẫn chiếm không gian nhưng không hiển thị, vẫn có thể chọn bằng chuột.

- `opacity: 0` chỉ làm phần tử trong suốt, vẫn hiển thị, vẫn chiếm không gian và vẫn có thể chọn bằng chuột.
