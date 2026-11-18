// insert dữ liệu vào collection
db.members.insert(
  {
    _id: "member003",
    name: "Phạm Văn D",
    email: "phamvand@example.com",
    registration_date: "2025-03-01"
  }
)

// insert dữ liệu vào collection
db.members.insertMany(
  [
    {
      _id: "member101",
      name: "Trần Thị B",
      email: "tranthib@example.com",
      registration_date: "2025-01-15",
      status: "active"
    },
    {
      _id: "member102",
      name: "Lê Văn C",
      email: "levanc@example.com",
      registration_date: "2025-02-20",
      status: "inactive"
    }
  ]
)