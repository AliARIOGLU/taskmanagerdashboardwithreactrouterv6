import React from "react";
import * as S from "./styles";

function ProfileButton() {
  return (
    <S.ProfileButton>
      <S.Image
        src="https://avatars.githubusercontent.com/u/121439605?v=4"
        alt="Griffith"
      />
      <S.Content>
        <S.Text>Ali Arioglu</S.Text>
        <S.Subtitle>Admin</S.Subtitle>
      </S.Content>
    </S.ProfileButton>
  );
}

export { ProfileButton };
