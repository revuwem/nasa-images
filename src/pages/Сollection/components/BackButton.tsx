import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  };

  return <Button onClick={() => onClick()}> ← Back to Search</Button>;
};

export default BackButton;
