import React, { Component } from 'react';
import Svg, { Path, G, Text, Circle ,Rect  } from "react-native-svg"
import { View } from 'react-native';
import SvgPanZoom, { SvgPanZoomElement } from 'react-native-svg-pan-zoom';

class ZoomMapTest extends Component {

  render() {
    return (
      <View style = {{ width: '100%', height:'100%' }}>

        <SvgPanZoom
          canvasHeight  = {1000}
          canvasWidth   = {3100}
          minScale      = {0.2}
          initialZoom   = {0.75}
          onZoom        = {(zoom) => { console.log('onZoom:' + zoom) }}
          canvasStyle   = {{ backgroundColor: 'white' }}
          viewStyle     = {{ backgroundColor: 'white'  }}
        >

          {/* Doesn't consume or respond to clicks */}
          

          {/* Responds to clicks */}
          <SvgPanZoomElement
            x ={50}
            y ={50}
            
          >
            <Rect
            id="e_107"
            x={109}
            y={230}
            width={1}
            height={157}
            rx={0.5}
            data-edge-key={m.e.v_96__v_79.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_106"
            x={109}
            y={105}
            width={1}
            height={126}
            rx={0.5}
            data-edge-key={m.e.v_79__v_75.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_105"
            x={240}
            y={105}
            width={1}
            height={135}
            rx={0.5}
            data-edge-key={m.e.v_69__v_67.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_104"
            x={316}
            y={105}
            width={1}
            height={65}
            rx={0.5}
            data-edge-key={m.e.v_72__v_71.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_103"
            x={421}
            y={201}
            width={1}
            height={39}
            rx={0.5}
            data-edge-key={m.e.v_29__v_28.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_102"
            x={525}
            y={201}
            width={1}
            height={39}
            rx={0.5}
            data-edge-key={m.e.v_26__v_27.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_101"
            x={525}
            y={239}
            width={1}
            height={39}
            rx={0.5}
            data-edge-key={m.e.v_26__v_25.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_100"
            x={463}
            y={105}
            width={1}
            height={65}
            rx={0.5}
            data-edge-key={m.e.v_74__v_70.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_99"
            x={463}
            y={66}
            width={1}
            height={40}
            rx={0.5}
            data-edge-key={m.e.v_74__v_73.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_98"
            x={711}
            y={66}
            width={1}
            height={40}
            rx={0.5}
            data-edge-key={m.e.v_15__v_14.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_97"
            x={785}
            y={201}
            width={1}
            height={39}
            rx={0.5}
            data-edge-key={m.e.v_19__v_18.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_96"
            x={838}
            y={239}
            width={1}
            height={39}
            rx={0.5}
            data-edge-key={m.e.v_17__v_16.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_95"
            x={890}
            y={309}
            width={1}
            height={41}
            rx={0.5}
            data-edge-key={m.e.v_4__v_3.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_94"
            x={890}
            y={349}
            width={1}
            height={39}
            rx={0.5}
            data-edge-key={m.e.v_4__v_2.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_93"
            x={838}
            y={105}
            width={1}
            height={65}
            rx={0.5}
            data-edge-key={m.e.v_13__v_12.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_92"
            x={240}
            y={66}
            width={1}
            height={40}
            rx={0.5}
            data-edge-key={m.e.v_69__v_68.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_91"
            x={600}
            y={105}
            width={1}
            height={135}
            rx={0.5}
            data-edge-key={m.e.v_24__v_21.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_90"
            x={600}
            y={239}
            width={1}
            height={106}
            rx={0.5}
            data-edge-key={m.e.v_45__v_24.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_89"
            x={600}
            y={344}
            width={1}
            height={43}
            rx={0.5}
            data-edge-key={m.e.v_44__v_45.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_88"
            x={600}
            y={386}
            width={1}
            height={38}
            rx={0.5}
            data-edge-key={m.e.v_44__v_53.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_87"
            x={600}
            y={423}
            width={1}
            height={108}
            rx={0.5}
            data-edge-key={m.e.v_81__v_53.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_86"
            x={600}
            y={530}
            width={1}
            height={133}
            rx={0.5}
            data-edge-key={m.e.v_82__v_81.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_85"
            x={711}
            y={565}
            width={1}
            height={98}
            rx={0.5}
            data-edge-key={m.e.v_36__v_34.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_84"
            x={711}
            y={460}
            width={1}
            height={106}
            rx={0.5}
            data-edge-key={m.e.v_42__v_36.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_83"
            x={760}
            y={529}
            width={1}
            height={37}
            rx={0.5}
            data-edge-key={m.e.v_33__v_32.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_82"
            x={785}
            y={460}
            width={1}
            height={38}
            rx={0.5}
            data-edge-key={m.e.v_41__v_40.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_81"
            x={785}
            y={419}
            width={1}
            height={42}
            rx={0.5}
            data-edge-key={m.e.v_41__v_39.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_80"
            x={890}
            y={419}
            width={1}
            height={42}
            rx={0.5}
            data-edge-key={m.e.v_38__v_37.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_79"
            x={711}
            y={386}
            width={1}
            height={75}
            rx={0.5}
            data-edge-key={m.e.v_42__v_43.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_78"
            x={711}
            y={349}
            width={1}
            height={38}
            rx={0.5}
            data-edge-key={m.e.v_43__v_1.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_77"
            x={711}
            y={239}
            width={1}
            height={111}
            rx={0.5}
            data-edge-key={m.e.v_20__v_1.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_76"
            x={990}
            y={239}
            width={1}
            height={111}
            rx={0.5}
            data-edge-key={m.e.v_8__v_5.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_75"
            x={990}
            y={349}
            width={1}
            height={55}
            rx={0.5}
            data-edge-key={m.e.v_5__v_7.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_74"
            x={990}
            y={403}
            width={1}
            height={58}
            rx={0.5}
            data-edge-key={m.e.v_7__v_31.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_73"
            x={711}
            y={105}
            width={1}
            height={135}
            rx={0.5}
            data-edge-key={m.e.v_20__v_15.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_72"
            x={990}
            y={105}
            width={1}
            height={135}
            rx={0.5}
            data-edge-key={m.e.v_11__v_8.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_71"
            x={240}
            y={239}
            width={1}
            height={106}
            rx={0.5}
            data-edge-key={m.e.v_67__v_66.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_70"
            x={421}
            y={309}
            width={1}
            height={36}
            rx={0.5}
            data-edge-key={m.e.v_51__v_50.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_69"
            x={475}
            y={344}
            width={1}
            height={43}
            rx={0.5}
            data-edge-key={m.e.v_47__v_46.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_68"
            x={473}
            y={423}
            width={1}
            height={38}
            rx={0.5}
            data-edge-key={m.e.v_55__v_54.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_67"
            x={316}
            y={239}
            width={1}
            height={39}
            rx={0.5}
            data-edge-key={m.e.v_30__v_48.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_66"
            x={316}
            y={309}
            width={1}
            height={36}
            rx={0.5}
            data-edge-key={m.e.v_52__v_49.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_65"
            x={240}
            y={344}
            width={1}
            height={43}
            rx={0.5}
            data-edge-key={m.e.v_65__v_66.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_64"
            x={240}
            y={386}
            width={1}
            height={38}
            rx={0.5}
            data-edge-key={m.e.v_65__v_56.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_63"
            x={240}
            y={423}
            width={1}
            height={38}
            rx={0.5}
            data-edge-key={m.e.v_56__v_64.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_62"
            x={240}
            y={460}
            width={1}
            height={71}
            rx={0.5}
            data-edge-key={m.e.v_62__v_64.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_61"
            x={240}
            y={530}
            width={1}
            height={133}
            rx={0.5}
            data-edge-key={m.e.v_89__v_62.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_60"
            x={240}
            y={662}
            width={1}
            height={45}
            rx={0.5}
            data-edge-key={m.e.v_89__v_88.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_59"
            x={316}
            y={600}
            width={1}
            height={63}
            rx={0.5}
            data-edge-key={m.e.v_86__v_85.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_58"
            x={473}
            y={600}
            width={1}
            height={63}
            rx={0.5}
            data-edge-key={m.e.v_83__v_84.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_57"
            x={473}
            y={662}
            width={1}
            height={45}
            rx={0.5}
            data-edge-key={m.e.v_84__v_87.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_56"
            x={368}
            y={530}
            width={1}
            height={39}
            rx={0.5}
            data-edge-key={m.e.v_61__v_59.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_55"
            x={525}
            y={492}
            width={1}
            height={39}
            rx={0.5}
            data-edge-key={m.e.v_58__v_57.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_54"
            x={368}
            y={492}
            width={1}
            height={39}
            rx={0.5}
            data-edge-key={m.e.v_61__v_60.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_53"
            x={109}
            y={534}
            width={1}
            height={129}
            rx={0.5}
            data-edge-key={m.e.v_91__v_94.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_52"
            x={109}
            y={662}
            width={1}
            height={45}
            rx={0.5}
            data-edge-key={m.e.v_91__v_90.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_51"
            x={109}
            y={386}
            width={1}
            height={149}
            rx={0.5}
            data-edge-key={m.e.v_96__v_94.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_50"
            x={241}
            y={105}
            width={1}
            height={132}
            rx={0.5}
            transform="rotate(90 241 105)"
            data-edge-key={m.e.v_75__v_69.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_49"
            x={110}
            y={105}
            width={1}
            height={44}
            rx={0.5}
            transform="rotate(90 110 105)"
            data-edge-key={m.e.v_75__v_76.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_48"
            x={241}
            y={386}
            width={1}
            height={132}
            rx={0.5}
            transform="rotate(90 241 386)"
            data-edge-key={m.e.v_96__v_65.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_47"
            x={241}
            y={460}
            width={1}
            height={39}
            rx={0.5}
            transform="rotate(90 241 460)"
            data-edge-key={m.e.v_64__v_63.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_46"
            x={171}
            y={534}
            width={1}
            height={62}
            rx={0.5}
            transform="rotate(90 171 534)"
            data-edge-key={m.e.v_92__v_94.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_45"
            x={110}
            y={534}
            width={1}
            height={44}
            rx={0.5}
            transform="rotate(90 110 534)"
            data-edge-key={m.e.v_94__v_93.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_44"
            x={110}
            y={386}
            width={1}
            height={35}
            rx={0.5}
            transform="rotate(90 110 386)"
            data-edge-key={m.e.v_95__v_96.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_43"
            x={317.001}
            y={344}
            width={1}
            height={77}
            rx={0.5}
            transform="rotate(90 317.001 344)"
            data-edge-key={m.e.v_52__v_66.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_42"
            x={317.001}
            y={239}
            width={1}
            height={77}
            rx={0.5}
            transform="rotate(90 317.001 239)"
            data-edge-key={m.e.v_30__v_67.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_41"
            x={186}
            y={230}
            width={1}
            height={77}
            rx={0.5}
            transform="rotate(90 186 230)"
            data-edge-key={m.e.v_79__v_78.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_40"
            x={110}
            y={230}
            width={1}
            height={44}
            rx={0.5}
            transform="rotate(90 110 230)"
            data-edge-key={m.e.v_79__v_77.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_39"
            x={422.001}
            y={239}
            width={1}
            height={106}
            rx={0.5}
            transform="rotate(90 422.001 239)"
            data-edge-key={m.e.v_29__v_30.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_38"
            x={526.001}
            y={239}
            width={1}
            height={105}
            rx={0.5}
            transform="rotate(90 526.001 239)"
            data-edge-key={m.e.v_26__v_29.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_37"
            x={601}
            y={239}
            width={1}
            height={76}
            rx={0.5}
            transform="rotate(90 601 239)"
            data-edge-key={m.e.v_24__v_26.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_36"
            x={640}
            y={239}
            width={1}
            height={40}
            rx={0.5}
            transform="rotate(90 640 239)"
            data-edge-key={m.e.v_24__v_23.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_35"
            x={712}
            y={239}
            width={1}
            height={41}
            rx={0.5}
            transform="rotate(90 712 239)"
            data-edge-key={m.e.v_20__v_22.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_34"
            x={422}
            y={344}
            width={1}
            height={106}
            rx={0.5}
            transform="rotate(90 422 344)"
            data-edge-key={m.e.v_51__v_52.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_33"
            x={476}
            y={344}
            width={1}
            height={55}
            rx={0.5}
            transform="rotate(90 476 344)"
            data-edge-key={m.e.v_47__v_51.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_32"
            x={601}
            y={344}
            width={1}
            height={126}
            rx={0.5}
            transform="rotate(90 601 344)"
            data-edge-key={m.e.v_45__v_47.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_31"
            x={601}
            y={423}
            width={1}
            height={128}
            rx={0.5}
            transform="rotate(90 601 423)"
            data-edge-key={m.e.v_55__v_53.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_30"
            x={601}
            y={530}
            width={1}
            height={76}
            rx={0.5}
            transform="rotate(90 601 530)"
            data-edge-key={m.e.v_81__v_58.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_29"
            x={640}
            y={530}
            width={1}
            height={40}
            rx={0.5}
            transform="rotate(90 640 530)"
            data-edge-key={m.e.v_81__v_80.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_28"
            x={526}
            y={530}
            width={1}
            height={158}
            rx={0.5}
            transform="rotate(90 526 530)"
            data-edge-key={m.e.v_58__v_61.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_27"
            x={369.007}
            y={530}
            width={1}
            height={129}
            rx={0.5}
            transform="rotate(90 369.007 530)"
            data-edge-key={m.e.v_61__v_62.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_26"
            x={317.007}
            y={662}
            width={1}
            height={77}
            rx={0.5}
            transform="rotate(90 317.007 662)"
            data-edge-key={m.e.v_86__v_89.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <G id="e_25">
            <Path
              d="M394.749 662v1H316.5a.5.5 0 010-1h78.249zM473.5 662a.5.5 0 010 1h-78.751v-1H473.5z"
              data-edge-key={m.e.v_84__v_86.key}
              ref={edgeRefCallback}
              className={classNames(styles["Edge"])}
            />
          </G>
          <G id="e_24">
            <Path
              d="M536.799 662v1h-63.297a.5.5 0 010-1h63.297zM600.502 662a.5.5 0 110 1h-63.703v-1h63.703z"
              data-edge-key={m.e.v_82__v_84.key}
              ref={edgeRefCallback}
              className={classNames(styles["Edge"])}
            />
          </G>
          <G id="e_23">
            <Path
              d="M655.822 662v1H600.5a.5.5 0 010-1h55.322zM711.5 662a.5.5 0 010 1h-55.678v-1H711.5z"
              data-edge-key={m.e.v_34__v_82.key}
              ref={edgeRefCallback}
              className={classNames(styles["Edge"])}
            />
          </G>
          <Rect
            id="e_22"
            x={241.007}
            y={662}
            width={1}
            height={132}
            rx={0.5}
            transform="rotate(90 241.007 662)"
            data-edge-key={m.e.v_89__v_91.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_21"
            x={474}
            y={423}
            width={1}
            height={234}
            rx={0.5}
            transform="rotate(90 474 423)"
            data-edge-key={m.e.v_56__v_55.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_20"
            x={317}
            y={105}
            width={1}
            height={77}
            rx={0.5}
            transform="rotate(90 317 105)"
            data-edge-key={m.e.v_69__v_72.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_19"
            x={464}
            y={105}
            width={1}
            height={148}
            rx={0.5}
            transform="rotate(90 464 105)"
            data-edge-key={m.e.v_72__v_74.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_18"
            x={601}
            y={105}
            width={1}
            height={138}
            rx={0.5}
            transform="rotate(90 601 105)"
            data-edge-key={m.e.v_74__v_21.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_17"
            x={712.003}
            y={105}
            width={1}
            height={112}
            rx={0.5}
            transform="rotate(90 712.003 105)"
            data-edge-key={m.e.v_21__v_15.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_16"
            x={786.002}
            y={239}
            width={1}
            height={75}
            rx={0.5}
            transform="rotate(90 786.002 239)"
            data-edge-key={m.e.v_19__v_20.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_15"
            x={839.001}
            y={239}
            width={1}
            height={54}
            rx={0.5}
            transform="rotate(90 839.001 239)"
            data-edge-key={m.e.v_17__v_19.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_14"
            x={991}
            y={239}
            width={1}
            height={153}
            rx={0.5}
            transform="rotate(90 991 239)"
            data-edge-key={m.e.v_8__v_17.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_13"
            x={991}
            y={349}
            width={1}
            height={101}
            rx={0.5}
            transform="rotate(90 991 349)"
            data-edge-key={m.e.v_4__v_5.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_12"
            x={1046}
            y={403}
            width={1}
            height={56}
            rx={0.5}
            transform="rotate(90 1046 403)"
            data-edge-key={m.e.v_7__v_6.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_11"
            x={891}
            y={349}
            width={1}
            height={180}
            rx={0.5}
            transform="rotate(90 891 349)"
            data-edge-key={m.e.v_1__v_4.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_10"
            x={786}
            y={460}
            width={1}
            height={75}
            rx={0.5}
            transform="rotate(90 786 460)"
            data-edge-key={m.e.v_41__v_42.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_9"
            x={761}
            y={565}
            width={1}
            height={50}
            rx={0.5}
            transform="rotate(90 761 565)"
            data-edge-key={m.e.v_36__v_33.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_8"
            x={712}
            y={565}
            width={1}
            height={41}
            rx={0.5}
            transform="rotate(90 712 565)"
            data-edge-key={m.e.v_36__v_35.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_7"
            x={891}
            y={460}
            width={1}
            height={106}
            rx={0.5}
            transform="rotate(90 891 460)"
            data-edge-key={m.e.v_38__v_41.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_6"
            x={991}
            y={460}
            width={1}
            height={101}
            rx={0.5}
            transform="rotate(90 991 460)"
            data-edge-key={m.e.v_31__v_38.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_5"
            x={712}
            y={386}
            width={1}
            height={112}
            rx={0.5}
            transform="rotate(90 712 386)"
            data-edge-key={m.e.v_43__v_44.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_4"
            x={839}
            y={105}
            width={1}
            height={128}
            rx={0.5}
            transform="rotate(90 839 105)"
            data-edge-key={m.e.v_15__v_13.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_3"
            x={991}
            y={105}
            width={1}
            height={153}
            rx={0.5}
            transform="rotate(90 991 105)"
            data-edge-key={m.e.v_13__v_11.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_2"
            x={1046}
            y={105}
            width={1}
            height={56}
            rx={0.5}
            transform="rotate(90 1046 105)"
            data-edge-key={m.e.v_11__v_10.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
          <Rect
            id="e_1"
            x={1046}
            y={239}
            width={1}
            height={56}
            rx={0.5}
            transform="rotate(90 1046 239)"
            data-edge-key={m.e.v_8__v_9.key}
            ref={edgeRefCallback}
            className={classNames(styles["Edge"])}
          />
        <G id="Vertices">
          <Circle
            id="v_96"
            cx={109.5}
            cy={386.5}
            r={4.5}
            data-vertex-key={m.v.v_96.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_96.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_95"
            cx={75.5}
            cy={386.5}
            r={4.5}
            data-vertex-key={m.v.v_95.key}
            data-tooltip="Jeste?? tutaj"
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_95.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_94"
            cx={109.5}
            cy={534.5}
            r={4.5}
            data-vertex-key={m.v.v_94.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_94.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_93"
            cx={66.5}
            cy={534.5}
            r={4.5}
            data-vertex-key={m.v.v_93.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_93.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_92"
            cx={170.5}
            cy={534.5}
            r={4.5}
            data-vertex-key={m.v.v_92.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_92.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_91"
            cx={109.5}
            cy={662.5}
            r={4.5}
            data-vertex-key={m.v.v_91.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_91.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_90"
            cx={109.5}
            cy={706.5}
            r={4.5}
            data-vertex-key={m.v.v_90.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_90.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_89"
            cx={240.5}
            cy={662.5}
            r={4.5}
            data-vertex-key={m.v.v_89.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_89.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_88"
            cx={240.5}
            cy={706.5}
            r={4.5}
            data-vertex-key={m.v.v_88.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_88.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_87"
            cx={473.5}
            cy={706.5}
            r={4.5}
            data-vertex-key={m.v.v_87.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_87.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_86"
            cx={316.5}
            cy={662.5}
            r={4.5}
            data-vertex-key={m.v.v_86.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_86.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_85"
            cx={316.5}
            cy={600.5}
            r={4.5}
            data-vertex-key={m.v.v_85.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_85.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_84"
            cx={473.5}
            cy={662.5}
            r={4.5}
            data-vertex-key={m.v.v_84.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_84.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_83"
            cx={473.5}
            cy={600.5}
            r={4.5}
            data-vertex-key={m.v.v_83.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_83.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_82"
            cx={600.5}
            cy={662.5}
            r={4.5}
            data-vertex-key={m.v.v_82.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_82.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_81"
            cx={600.5}
            cy={530.5}
            r={4.5}
            data-vertex-key={m.v.v_81.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_81.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_80"
            cx={639.5}
            cy={530.5}
            r={4.5}
            data-vertex-key={m.v.v_80.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_80.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_79"
            cx={109.5}
            cy={230.5}
            r={4.5}
            data-vertex-key={m.v.v_79.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_79.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_78"
            cx={185.5}
            cy={230.5}
            r={4.5}
            data-vertex-key={m.v.v_78.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_78.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_77"
            cx={66.5}
            cy={230.5}
            r={4.5}
            data-vertex-key={m.v.v_77.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_77.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_76"
            cx={66.5}
            cy={105.5}
            r={4.5}
            data-vertex-key={m.v.v_76.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_76.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_75"
            cx={109.5}
            cy={105.5}
            r={4.5}
            data-vertex-key={m.v.v_75.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_75.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_74"
            cx={463.5}
            cy={105.5}
            r={4.5}
            data-vertex-key={m.v.v_74.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_74.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_73"
            cx={463.5}
            cy={66.5}
            r={4.5}
            data-vertex-key={m.v.v_73.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_73.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_72"
            cx={316.5}
            cy={105.5}
            r={4.5}
            data-vertex-key={m.v.v_72.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_72.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_71"
            cx={316.5}
            cy={169.5}
            r={4.5}
            data-vertex-key={m.v.v_71.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_71.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_70"
            cx={463.5}
            cy={169.5}
            r={4.5}
            data-vertex-key={m.v.v_70.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_70.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_69"
            cx={240.5}
            cy={105.5}
            r={4.5}
            data-vertex-key={m.v.v_69.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_69.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_68"
            cx={240.5}
            cy={66.5}
            r={4.5}
            data-vertex-key={m.v.v_68.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_68.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_67"
            cx={240.5}
            cy={239.5}
            r={4.5}
            data-vertex-key={m.v.v_67.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_67.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_66"
            cx={240.5}
            cy={344.5}
            r={4.5}
            data-vertex-key={m.v.v_66.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_66.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_65"
            cx={240.5}
            cy={386.5}
            r={4.5}
            data-vertex-key={m.v.v_65.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_65.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_64"
            cx={240.5}
            cy={460.5}
            r={4.5}
            data-vertex-key={m.v.v_64.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_64.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_63"
            cx={202.5}
            cy={460.5}
            r={4.5}
            data-vertex-key={m.v.v_63.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_63.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_62"
            cx={240.5}
            cy={530.5}
            r={4.5}
            data-vertex-key={m.v.v_62.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_62.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_61"
            cx={368.5}
            cy={530.5}
            r={4.5}
            data-vertex-key={m.v.v_61.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_61.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_60"
            cx={368.5}
            cy={492.5}
            r={4.5}
            data-vertex-key={m.v.v_60.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_60.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_59"
            cx={368.5}
            cy={568.5}
            r={4.5}
            data-vertex-key={m.v.v_59.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_59.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_58"
            cx={525.5}
            cy={530.5}
            r={4.5}
            data-vertex-key={m.v.v_58.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_58.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_57"
            cx={525.5}
            cy={492.5}
            r={4.5}
            data-vertex-key={m.v.v_57.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_57.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_56"
            cx={240.5}
            cy={423.5}
            r={4.5}
            data-vertex-key={m.v.v_56.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_56.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_55"
            cx={473.5}
            cy={423.5}
            r={4.5}
            data-vertex-key={m.v.v_55.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_55.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_54"
            cx={473.5}
            cy={460.5}
            r={4.5}
            data-vertex-key={m.v.v_54.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_54.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_53"
            cx={600.5}
            cy={423.5}
            r={4.5}
            data-vertex-key={m.v.v_53.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_53.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_52"
            cx={316.5}
            cy={344.5}
            r={4.5}
            data-vertex-key={m.v.v_52.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_52.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_51"
            cx={421.5}
            cy={344.5}
            r={4.5}
            data-vertex-key={m.v.v_51.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_51.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_50"
            cx={421.5}
            cy={309.5}
            r={4.5}
            data-vertex-key={m.v.v_50.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_50.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_49"
            cx={316.5}
            cy={309.5}
            r={4.5}
            data-vertex-key={m.v.v_49.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_49.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_48"
            cx={316.5}
            cy={277.5}
            r={4.5}
            data-vertex-key={m.v.v_48.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_48.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_47"
            cx={475.5}
            cy={344.5}
            r={4.5}
            data-vertex-key={m.v.v_47.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_47.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_46"
            cx={475.5}
            cy={386.5}
            r={4.5}
            data-vertex-key={m.v.v_46.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_46.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_45"
            cx={600.5}
            cy={344.5}
            r={4.5}
            data-vertex-key={m.v.v_45.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_45.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_44"
            cx={600.5}
            cy={386.5}
            r={4.5}
            data-vertex-key={m.v.v_44.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_44.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_43"
            cx={711.5}
            cy={386.5}
            r={4.5}
            data-vertex-key={m.v.v_43.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_43.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_42"
            cx={711.5}
            cy={460.5}
            r={4.5}
            data-vertex-key={m.v.v_42.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_42.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_41"
            cx={785.5}
            cy={460.5}
            r={4.5}
            data-vertex-key={m.v.v_41.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_41.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_40"
            cx={785.5}
            cy={497.5}
            r={4.5}
            data-vertex-key={m.v.v_40.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_40.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_39"
            cx={785.5}
            cy={419.5}
            r={4.5}
            data-vertex-key={m.v.v_39.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_39.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_38"
            cx={890.5}
            cy={460.5}
            r={4.5}
            data-vertex-key={m.v.v_38.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_38.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_37"
            cx={890.5}
            cy={419.5}
            r={4.5}
            data-vertex-key={m.v.v_37.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_37.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_36"
            cx={711.5}
            cy={565.5}
            r={4.5}
            data-vertex-key={m.v.v_36.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_36.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_35"
            cx={671.5}
            cy={565.5}
            r={4.5}
            data-vertex-key={m.v.v_35.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_35.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_34"
            cx={711.5}
            cy={662.5}
            r={4.5}
            data-vertex-key={m.v.v_34.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_34.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_33"
            cx={760.5}
            cy={565.5}
            r={4.5}
            data-vertex-key={m.v.v_33.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_33.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_32"
            cx={760.5}
            cy={529.5}
            r={4.5}
            data-vertex-key={m.v.v_32.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_32.key,
            })}
            onClick={onVertexClick}
          />
          <Path
            id="v_31"
            d="M995 460.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
            data-vertex-key={m.v.v_31.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_31.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_30"
            cx={316.5}
            cy={239.5}
            r={4.5}
            data-vertex-key={m.v.v_30.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_30.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_29"
            r={4.5}
            transform="matrix(1 0 0 -1 421.5 239.5)"
            data-vertex-key={m.v.v_29.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_29.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_28"
            r={4.5}
            transform="matrix(1 0 0 -1 421.5 201.5)"
            data-vertex-key={m.v.v_28.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_28.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_27"
            r={4.5}
            transform="matrix(1 0 0 -1 525.5 201.5)"
            data-vertex-key={m.v.v_27.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_27.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_26"
            r={4.5}
            transform="matrix(1 0 0 -1 525.5 239.5)"
            data-vertex-key={m.v.v_26.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_26.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_25"
            r={4.5}
            transform="matrix(1 0 0 -1 525.5 277.5)"
            data-vertex-key={m.v.v_25.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_25.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_24"
            r={4.5}
            transform="matrix(1 0 0 -1 600.5 239.5)"
            data-vertex-key={m.v.v_24.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_24.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_23"
            r={4.5}
            transform="matrix(1 0 0 -1 639.5 239.5)"
            data-vertex-key={m.v.v_23.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_23.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_22"
            r={4.5}
            transform="matrix(1 0 0 -1 671.5 239.5)"
            data-vertex-key={m.v.v_22.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_22.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_21"
            r={4.5}
            transform="matrix(1 0 0 -1 600.5 105.5)"
            data-vertex-key={m.v.v_21.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_21.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_20"
            cx={711.5}
            cy={239.5}
            r={4.5}
            data-vertex-key={m.v.v_20.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_20.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_19"
            cx={785.5}
            cy={239.5}
            r={4.5}
            data-vertex-key={m.v.v_19.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_19.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_18"
            cx={785.5}
            cy={201.5}
            r={4.5}
            data-vertex-key={m.v.v_18.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_18.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_17"
            cx={838.5}
            cy={239.5}
            r={4.5}
            data-vertex-key={m.v.v_17.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_17.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_16"
            cx={838.5}
            cy={277.5}
            r={4.5}
            data-vertex-key={m.v.v_16.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_16.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_15"
            cx={711.5}
            cy={105.5}
            r={4.5}
            data-vertex-key={m.v.v_15.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_15.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_14"
            cx={711.5}
            cy={66.5}
            r={4.5}
            data-vertex-key={m.v.v_14.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_14.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_13"
            cx={838.5}
            cy={105.5}
            r={4.5}
            data-vertex-key={m.v.v_13.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_13.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_12"
            cx={838.5}
            cy={169.5}
            r={4.5}
            data-vertex-key={m.v.v_12.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_12.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_11"
            cx={990.5}
            cy={105.5}
            r={4.5}
            data-vertex-key={m.v.v_11.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_11.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_10"
            cx={1045.5}
            cy={105.5}
            r={4.5}
            data-vertex-key={m.v.v_10.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_10.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_9"
            cx={1045.5}
            cy={239.5}
            r={4.5}
            data-vertex-key={m.v.v_9.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_9.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_8"
            cx={990.5}
            cy={239.5}
            r={4.5}
            data-vertex-key={m.v.v_8.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_8.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_7"
            cx={990.5}
            cy={403.5}
            r={4.5}
            data-vertex-key={m.v.v_7.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_7.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_6"
            cx={1045.5}
            cy={403.5}
            r={4.5}
            data-vertex-key={m.v.v_6.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_6.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_5"
            cx={990.5}
            cy={349.5}
            r={4.5}
            data-vertex-key={m.v.v_5.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_5.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_4"
            cx={890.5}
            cy={349.5}
            r={4.5}
            data-vertex-key={m.v.v_4.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_4.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_3"
            cx={890.5}
            cy={309.5}
            r={4.5}
            data-vertex-key={m.v.v_3.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_3.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_2"
            cx={890.5}
            cy={387.5}
            r={4.5}
            data-vertex-key={m.v.v_2.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_2.key,
            })}
            onClick={onVertexClick}
          />
          <Circle
            id="v_1"
            cx={711.5}
            cy={349.5}
            r={4.5}
            data-vertex-key={m.v.v_1.key}
            ref={vertexRefCallback}
            className={classNames({
              [styles["Vertex"]]: true,
              [styles["Vertex--active"]]: startVertex === m.v.v_1.key,
            })}
            onClick={onVertexClick}
          />
          </SvgPanZoomElement>

        </SvgPanZoom>

      </View>
    );
  }
}

export default ZoomMapTest