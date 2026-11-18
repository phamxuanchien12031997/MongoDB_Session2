// insert dữ liệu vào collection
db.books.insert(
  {
    _id: "book104",
    title: "Clean Code",
    author: "Robert C.Martin",
    genre: "Công nghệ",
    rental_price: 25000,
    stock: 40
  }
)

// truy vấn tất cả các sách thuộc thể loại công nghệ
db.books.find({genre: "Công nghệ"})

// insert dữ liệu vào collection
db.books.insertMany(
  [
    {
    _id: "book201",
    title: "Lập trình Node.js",
    author: "Nguyễn Văn A",
    genre: "Công nghệ",
    rental_price: 25000,
    stock: 50,
    tags: ["Coding","javascript","backend"]
  },
  {
    _id: "book202",
    title: "Đắc nhân tâm",
    author: "Dale Carnegie",
    genre: "Kỹ năng sống",
    rental_price: 15000,
    stock: 80,
    tags: ["self-help","communication"]
  },
  {
    _id: "book203",
    title: "Bố già",
    author: "Mario Puzo",
    genre: "Tiểu thuyết",
    rental_price: 10000,
    stock: 30,
    tags: ["crime","fiction"]
  }
  ]
)

// insert dữ liệu vào collection
db.books.insert(
  {
    _id: "book101",
    title: "38 lá thư của Rockefeller gửi cont trai",
    author: "Bizbooks",
    genre: "Hồi ký",
    rental_price: 151000,
    stock: 60,
    tag: ["Epistolary","Self_help"]
  }
)

// update trường stock của sách có _id: "book101" thành 100
db.books.findOne({_id: "book101"})

// delete sách có _id: "book104"
db.books.deleteOne({_id: "book104"})