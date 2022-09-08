
## Context API

## - Vẫn là câu chuyện quản lý state. Khi component phân cấp quá nhiều, việc xác định nơi lưu trữ state và nơi làm thay đổi state khi component thay đổi dẫn đến việc truyền props trở nên rườm rà và phức tạp. Dữ liệu được truyền qua props theo hình thức: cha -> con, annh -> em, ông nội -> cha -> con,....


## - Tương tự redux thằng react-context ra đời cũng nhằm để giải quyết vấn đề đó.

## - Context chia sẻ dữ liệu cho nhiều các component khác nhau tương tự Redux (theo 1 góc nhìn nào đó redux khá giống nhau chúng đều quản lý state tập trung rồi phân phối cho các component)

## - Context có 2 thành phần: Provider và Consumer. Trong đó Provider đóng vai trò là component quản lý các state sử dụng chung cho các component được nó bao phủ, Consumer đóng vai trò truy xuất dữ liệu từ state chứa trong Provider



