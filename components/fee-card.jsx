export default function FeeCard({ dueAmount, dueDate }) {
  return (
    <div className="card" style={{ padding: 16 }}>
      <div className="small">Transport Fee Payment</div>
      <div className="row" style={{ justifyContent:"space-between", marginTop: 6 }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: 800 }}>INR {Number(dueAmount || 0).toLocaleString("en-IN")}.00</div>
          <div className="small">Due Date : {dueDate || "-"}</div>
        </div>
        <button className="btn">Pay Now</button>
      </div>
    </div>
  );
}
