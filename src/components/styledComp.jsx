import { Colors } from "../colors/colors";
import styled from "styled-components/native";

export const Wrapper = styled.View({
    flex: 1,
    padding: 30,
    backgroundColor: Colors.black
});
export const Title = styled.Text({
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.pvoilet,
    marginTop: 10,
    marginBottom: 50
});
export const Btn = styled.TouchableOpacity({
    alignSelf: 'center',
    width: '50%',
    height: 40,
    backgroundColor: Colors.pvoilet,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 20,
});
export const Input = styled.TextInput({
    alignSelf: 'center',
    width: 270,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.grey,
    backgroundColor: Colors.grey,
    borderRadius: 10,
    paddingLeft: 20,
    color: Colors.white,
    marginTop: 20,
    marginBottom: 20

});
export const Bodytxt = styled.Text({
    fontSize: 16,
    color: Colors.white,
});
export const Items = styled.View({
    width: '60%',
    height: 200,
    backgroundColor: Colors.grey,
    borderRadius: 30,
    margin: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
});