import "./UserProfilePage.css";
import Menu from "../../templates/menu/Menu";
import { useState } from "react";
import RoundedForm from "../../molecules/RoundedForm/RoundedForm";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUpdateUserMutation } from "../../../slices/userApiSlice";
import { setCredentials } from "../../../slices/authSlice";

const UserProfilePage = (props) => {
  const { userInfo } = useSelector((state) => state.auth);
  const token = userInfo.token;

  const [updateProfile, { isLoading, error }] = useUpdateUserMutation();

  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmedPassword) {
      toast.error("Parolele introduse nu corespund");
    } else
      try {
        console.log("id: " + userInfo._id);
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
          token,
        }).unwrap();
        dispatch(setCredentials({ ...res, token: token }));
        toast.success("Profil actualizat cu success");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
  };
  return (
    <div className="UserProfilePageWrapper">
      <Menu />
      <div className="UserProfile-content">
        <img
          src="https://reactjs.org/logo-og.png"
          className="ProfileImage"
        ></img>
        <div className="UserProfile-card">
          <RoundedForm
            title={""}
            inputs={[
              {
                value: name,
                type: "text",
                onChange: (e) => {
                  setName(e.target.value);
                },
              },
              {
                value: email,
                type: "email",
                onChange: (e) => {
                  setEmail(e.target.value);
                },
              },
              {
                placeholder: "Parola",
                type: "password",
                onChange: (e) => {
                  setPassword(e.target.value);
                },
              },
              {
                placeholder: "Reintroduceți parola",
                type: "password",
                onChange: (e) => {
                  setConfirmedPassword(e.target.value);
                },
              },
            ]}
            buttonText="Salvează"
            onSubmit={submitHandler}
          ></RoundedForm>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
