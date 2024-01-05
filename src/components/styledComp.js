import { Colors } from "../colors/colors";
import styled from "styled-components/native";

export const Wrapper = styled.View({
    flex: 1,
    padding: 20,
    alignItems: 'center'
});
export const Title = styled.Text({
    fontSize: 20,
    color: Colors.white,
});
export const Btn = styled.TouchableOpacity({
    width: '50%',
    height: 40,
    borderWidth: 1,
    borderColor: Colors.pvoilet,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 20,
});
export const Input = styled.TextInput({
    width: 270,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 10,
    paddingLeft: 20,
    color: Colors.white,
});
export const Bodytxt = styled.Text({
    fontSize: 16,
    color: Colors.pvoilet,
});
export const Items = styled.View({
    width: '60%',
    height: 200,
    backgroundColor: Colors.grey,
    borderRadius: 30,
    margin: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
})