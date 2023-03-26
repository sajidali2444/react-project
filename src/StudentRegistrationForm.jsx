function StudentRegistrationForm() {
  return (
    <div style={{ marginTop: 30 }}>
      <form>
        <div>
          <label>First Name</label>
          <input type='text' id='firstName' />
        </div>
        <div>
          <label>Last Name</label>
          <input type='text' id='lastName' />
        </div>
        <div>
          <label>Email</label>
          <input type='text' id='email' />
        </div>
      </form>
    </div>
  );
}
export default StudentRegistrationForm;

