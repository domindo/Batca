import React, {useState, useContext} from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroFlexView,
  ViroARPlane,
  ViroText,
  ViroARSceneNavigator,
  ViroMaterials,
  ViroAmbientLight,
  ViroTrackingStateConstants,
  ViroARTrackingReasonConstants,
  Viro3DObject,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroNode,
} from '@viro-community/react-viro';

import {CountContext} from '../context/context';

export const SecondScene = ({navigation}) => {
  console.log('Scene2');
  // const [foundPlane, setFoundPlane] = useState(false);
  // const [planePosition, setPlanePositon] = useState([0, 0, 0]);
  // const [planeRotation, setPalneRotation] = useState([0, 0, 0]);

  // const on
  //register target
  ViroARTrackingTargets.createTargets({
    tesla: {
      source: require('../res/chum_ca.jpg'),
      orientation: 'Left',
      physicalWidth: 0.257,
    },
  });

  ViroARTrackingTargets.createTargets({
    basket: {
      source: require('../res/6.jpg'),
      orientation: 'Up',
      physicalWidth: 0.157,
    },
  });

  ViroMaterials.createMaterials({
    base: {
      lightingModel: 'PBR',
      normalTexture: require('../res/basket-3051/3051-NM_u0_v0.jpg'),
      diffuseTexture: require('../res/basket-3051/3051-TM_u0_v0.jpg'),
    },
  });
  // // const initialScene = (props) => {

  const [fishPro, setFishPro] = useState({
    type: 'Dynamic',
    mass: 2,
    enabled: false,
  });

  const onClick = () => {
    console.log('Dropping');
    setFishPro({type: 'Dynamic', mass: 2, enabled: true, friction: 5});

    this.txt.setNativeProps({visible: true});
  };

  const [count, setCount] = useContext(CountContext);

  const handleCount = newNumber => {
    setCount(count + newNumber);
  };

  const onFishCollision = viroTag => {
    if (viroTag == 'Ground') {
      handleCount(1);
      setImmediate(() => {
        fish.setNativeProps({visible: false});
      });

      navigation.navigate('Score');
    }
    if (viroTag == 'planes') {
      navigation.navigate('Fail');
    }
    return null;
  };

  return (
    <ViroARScene>
      <ViroNode>
        <ViroARImageMarker
          target="tesla"
          // onAnchorFound={onAnchorFound}
        >
          <ViroNode position={[0.2, -0.02, -0.3]}>
            <ViroFlexView
              rotation={[-90, -90, 0]}
              height={0.03}
              width={0.05}
              style={styles.card}>
              <ViroText
                ref={obj => {
                  this.txt1 = obj;
                }}
                width={0.05}
                height={0.1}
                // visible={false}
                textAlign="left"
                text="Dichuyểnconcáđếntrungtâmchiếcgiỏ.Chạmđểthảcávàogiỏ"
                scale={[0.1, 0.1, 0.1]}
                style={styles.textStyle}
              />
            </ViroFlexView>
          </ViroNode>
          <ViroNode position={[-0.2, -0.02, -0.3]}>
            <ViroFlexView
              rotation={[-90, -90, 0]}
              height={0.03}
              width={0.05}
              style={styles.card}>
              <ViroText
                ref={obj => {
                  this.txt = obj;
                }}
                width={0.05}
                height={0.1}
                visible={false}
                textAlign="left"
                text="Nếubạnchưabắtthànhcông,bấmnútquaylạiđểtiếptục!!"
                scale={[0.1, 0.1, 0.1]}
                style={styles.textStyle}
              />
            </ViroFlexView>
          </ViroNode>
          <ViroAmbientLight color="#ffffff" />
          <Viro3DObject
            ref={obj => {
              fish = obj;
            }}
            source={require('../res/japanese_northern_loach_misgurnus_sp..glb')}
            scale={[0.2, 0.2, 0.2]}
            // scale={[0.012, 0.012, 0.012]}
            rotation={[0, 0, 0]}
            position={[0, 0.1, 0]}
            viroTag="Fish"
            type="GLB"
            onClick={onClick}
            onDrag={() => {}}
            onCollision={onFishCollision}
            physicsBody={fishPro}
          />
        </ViroARImageMarker>
      </ViroNode>
      <ViroNode>
        <ViroARImageMarker target="basket">
          <ViroAmbientLight color="#ffffff" />
          <Viro3DObject
            source={require('../res/basket-3051/3051.obj')}
            scale={[0.0012, 0.0006, 0.0012]}
            rotation={[-1, -1, 0]}
            position={[0, 0.01, 0]}
            type="OBJ"
            // onClick={ClickBasket}
            materials={['base']}
            viroTag="Ground"
            physicsBody={{
              type: 'Kinematic',
              mass: 0,
            }}
          />
        </ViroARImageMarker>
      </ViroNode>
    </ViroARScene>
  );
};
var styles = StyleSheet.create({
  textStyle: {
    flex: 0.5,
    fontFamily: 'Roboto',
    fontSize: 30,
    color: '#0040ff',
    textAlignVertical: 'top',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'column',
  },
});
