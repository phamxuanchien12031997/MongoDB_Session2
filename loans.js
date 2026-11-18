// insert dữ liệu vào collection
db.loans.insertMany(
  [
    {
      _id: "loan201",
      member_id: "member101",
      book_id: "book201",
      loan_date: "2025-07-20",
      due_date: "2025-08-03"
    },
    {
      _id: "loan202",
      member_id: "member102",
      book_id: "book202",
      loan_date: "2025-07-22",
      due_date: "2025-08-05"
    }
  ]
)

// truy vấn các khoản mượn có due_date sau ngày: "2025-08-01"
// TH1: sau ngày 01 tức sang ngày 02
db.loans.find({due_date: {$gt: "2025-08-01"}})
// TH2: lấy bắt đầu từ ngày 01
db.loans.find({due_date: {$gte: "2025-08-01"}})

// insert dữ liệu vào collection
db.loans.insertOne(
  {
    _id: "loan001",
    member_id: "member001",
    book_id: "book001",
    loan_date: "2025-05-25",
    due_date: "2025-09-20"
  }
)

//update due_date có khoản mượn có _id: "loan001" thành "2025-08-10"
db.loans.updateOne(
  {_id: "loan001"},
  {$set: {due_date: "2025-08-10"}}
)

// delete các khoản mượn có due_date: "2025-08-10"
db.loans.deleteMany({due_date: "2025-08-10"})