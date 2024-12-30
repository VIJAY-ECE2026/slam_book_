function Slamebook() {
  return (
    <fieldset>
    <div id="slam-container">
      <legend>
      <h2>Slam Book</h2>
      </legend>
      <form id="slam-form">
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Name:  </label>
          <input type="text" id="name" placeholder="Type here" />
        </div>
        {/*DOB */}
        <div className="form-group" id="dob">
          <label htmlFor="dob">DOB: </label>
          <input type="date" id="dob" />
        </div>
        {/* Nickname */}
        <div className="form-group">
          <label htmlFor="nickname">Nickname:    </label>
          <input type="text" id="nickname" placeholder="Type here" />
        </div>

        {/* Address */}
        <div className="form-group">
          <label htmlFor="address">Address:   </label>
          <input type="text" id="address" placeholder="Type here" />
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="phone">Phone:   </label>
          <input type="text" id="phone" placeholder="Type here" />
        </div>

        {/* Memories */}
        <div className="form-group">
          <label htmlFor="memories">Memories:   </label>
       <textarea name="memories" id="memories"></textarea>
        </div>

        {/* Gender */}
        <div className="form-group">
          <label>Gender:</label>
          <input type="radio" name="gender" id="male" value="Male" />
          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" id="female" value="Female" />
          <label htmlFor="female">Female</label>
        </div>

        {/* Favorite Actor */}
        <div className="form-group">
          <label>Favorite Actor:</label>
          <input type="radio" name="favActor" id="vijay" value="Vijay" />
          <label htmlFor="vijay">Vijay</label>
          <input type="radio" name="favActor" id="ajith" value="Ajith" />
          <label htmlFor="ajith">Ajith</label>
          <input type="radio" name="favActor" id="rajini" value="Rajini" />
          <label htmlFor="rajini">Rajini</label>
          <input type="radio" name="favActor" id="kamal" value="Kamal" />
          <label htmlFor="kamal">Kamal</label>
        </div>
      <div className="form-group">
        <label htmlFor="">School:</label>
        <select name="school" id="school">
        <option value="high">Select</option>
          <option value="high">High school</option>
          <option value="high">Middle school</option>
          <option value="high">KEC school</option>
          <option value="high">Kongu school</option>

        </select>
      </div>
        {/* Submit Button */}
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </fieldset>
  );
}

export default Slamebook;
