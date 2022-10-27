import React, { useState } from "react";
import Dialog from "./components/Dialog";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <button
          onClick={() => setIsOpen(true)}
          style={{
            border: "none",
            backgroundColor: "#04835b",
            borderRadius: "10px",
          }}
        >
          <span style={{ fontSize: "24px", color: "#FFFFFF" }}>
            SHOW DIALOG
          </span>
        </button>
      </div>
      <Dialog
        closeOnOverlayClick={true}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        title={"Title"}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          tincidunt faucibus vulputate. Cras ultricies odio eget nulla tempor
          pharetra. Quisque elementum, lacus vel maximus rutrum, arcu arcu
          tempor erat, et interdum urna lectus et mauris. Fusce vitae elementum
          ante, ac sagittis mi. Fusce at iaculis odio, sed tempus nisi. Aliquam
          erat volutpat. Donec venenatis nunc id orci rutrum malesuada. Etiam ut
          ipsum quis metus fringilla semper. Mauris facilisis semper lectus eget
          aliquet. Maecenas hendrerit sed massa ultricies porttitor. Fusce
          elementum neque leo, eu consectetur enim porta vitae. Integer id eros
          velit. In hac habitasse platea dictumst. Phasellus facilisis magna at
          ligula facilisis, at ullamcorper orci rutrum. In tincidunt aliquam ex,
          nec interdum est ornare vitae. Nam semper fringilla rhoncus. Vivamus
          eu euismod ipsum. Donec tempus laoreet dolor. Pellentesque at
          vulputate tortor. Sed maximus dui fringilla mi congue porttitor.
          Vestibulum eleifend enim ut rutrum blandit. Integer facilisis congue
          justo nec tristique. Nam pretium, lorem sed molestie rutrum, tellus
          augue luctus odio, eu pulvinar lacus nunc eget neque. Vestibulum
          porttitor, est eu posuere semper, lorem felis egestas metus, vitae
          luctus nibh leo in urna. Pellentesque ante enim, tincidunt at odio
          quis, facilisis pretium tellus. Pellentesque sagittis elit nulla, eget
          porta dui hendrerit eu. Aenean porttitor urna nec varius scelerisque.
          Aliquam ornare magna nec ipsum auctor convallis. Etiam at orci lectus.
          Nulla suscipit lobortis dui, ut dictum tellus finibus eget. Maecenas
          ac ante enim. Ut at turpis tellus. Nunc rutrum augue mattis diam
          tincidunt, sit amet pulvinar felis ornare. Aliquam erat volutpat.
          Phasellus hendrerit eget urna vitae fringilla. Phasellus facilisis
          turpis ut sem lacinia ultrices. Vivamus pharetra eros eget consequat
          auctor. Maecenas et ante vitae mi fermentum convallis vitae vitae
          diam. Integer luctus in justo vel faucibus. Duis at urna posuere,
          eleifend orci at, facilisis elit. Pellentesque non magna velit.
          Quisque tempus turpis neque, eu venenatis urna porttitor quis.
          Praesent a nisl eu ex rhoncus eleifend. Sed hendrerit velit in purus
          ultricies, ac ullamcorper felis accumsan. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas
          ullamcorper ipsum non ultricies fermentum. Aliquam lobortis urna
          luctus est mollis, et vestibulum ligula scelerisque. Etiam iaculis
          nisi in rhoncus mollis. Cras molestie ut ante vitae blandit. Cras
          ornare erat eu tortor imperdiet finibus. Phasellus mauris erat,
          vulputate id nisl nec, tempor faucibus tortor. Praesent eget porta mi.
          Vestibulum in arcu eu ipsum pretium placerat. Proin nisl neque,
          convallis ac sagittis eu, consequat quis est. Cras ut lorem felis.
          Donec pulvinar cursus dictum. Aenean vestibulum, lacus in varius
          euismod, ipsum nibh pharetra urna, eu pharetra diam massa laoreet
          turpis. In hac habitasse platea dictumst. Vestibulum convallis risus
          sapien. Proin ac turpis ut ex pretium cursus ut rutrum est. In
          tincidunt bibendum mauris eu aliquet. Donec est urna, venenatis eget
          egestas accumsan, finibus sed magna. Sed vel nulla a justo feugiat
          mollis. Fusce ligula dolor, faucibus eget tincidunt facilisis, auctor
          et lectus. Suspendisse potenti. Cras bibendum, risus eget cursus
          vulputate, mi purus suscipit enim, vel convallis est ipsum ac lectus.
          Sed at suscipit neque. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. In non velit rhoncus purus dapibus convallis eu a
          mauris. Duis non ex ligula. Vestibulum eget odio malesuada augue
          lobortis iaculis. Duis pharetra mattis leo non molestie. In hac
          habitasse platea dictumst. Vestibulum id lectus eget sapien mollis
          vehicula. Pellentesque elementum, sem et tempor dapibus, justo mauris
          ullamcorper risus, nec ultricies lorem lorem quis nibh. Sed consequat,
          mi et rhoncus auctor, nisl nulla dapibus metus, iaculis feugiat diam
          dui sit amet tellus. Etiam sit amet ullamcorper orci. Cras iaculis
          imperdiet nulla. Ut aliquet, tellus sit amet ullamcorper tincidunt,
          augue est ultricies justo, sed pellentesque diam massa ullamcorper
          justo. Morbi lacinia at odio in lacinia. Morbi nisi nulla, malesuada
          id augue at, suscipit dictum nulla. Donec quam libero, eleifend
          sodales sapien a, dictum bibendum mauris. Vivamus volutpat gravida
          turpis ac laoreet. Nulla auctor metus massa, eu posuere lacus
          ullamcorper sed. Donec tincidunt tristique suscipit. Nullam ultrices
          ante nec bibendum rhoncus. Vivamus a odio sit amet orci convallis
          ornare. Morbi tincidunt urna leo, vel vulputate massa fringilla ut.
          Aliquam rhoncus sem ut neque viverra, et ultricies ligula ultricies.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Sed nec magna sit amet sem elementum
          venenatis. Nunc non blandit justo, id vestibulum nunc. Suspendisse sit
          amet ornare nulla. Vestibulum non ultricies tortor. Aliquam posuere,
          erat eget imperdiet malesuada, ligula nibh cursus lorem, et porttitor
          sapien nunc nec mi. Vestibulum hendrerit interdum ipsum nec
          sollicitudin. Quisque ullamcorper magna a venenatis porta. Mauris
          vestibulum faucibus condimentum.
        </p>
      </Dialog>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt
        faucibus vulputate. Cras ultricies odio eget nulla tempor pharetra.
        Quisque elementum, lacus vel maximus rutrum, arcu arcu tempor erat, et
        interdum urna lectus et mauris. Fusce vitae elementum ante, ac sagittis
        mi. Fusce at iaculis odio, sed tempus nisi. Aliquam erat volutpat. Donec
        venenatis nunc id orci rutrum malesuada. Etiam ut ipsum quis metus
        fringilla semper. Mauris facilisis semper lectus eget aliquet. Maecenas
        hendrerit sed massa ultricies porttitor. Fusce elementum neque leo, eu
        consectetur enim porta vitae. Integer id eros velit. In hac habitasse
        platea dictumst. Phasellus facilisis magna at ligula facilisis, at
        ullamcorper orci rutrum. In tincidunt aliquam ex, nec interdum est
        ornare vitae. Nam semper fringilla rhoncus. Vivamus eu euismod ipsum.
        Donec tempus laoreet dolor. Pellentesque at vulputate tortor. Sed
        maximus dui fringilla mi congue porttitor. Vestibulum eleifend enim ut
        rutrum blandit. Integer facilisis congue justo nec tristique. Nam
        pretium, lorem sed molestie rutrum, tellus augue luctus odio, eu
        pulvinar lacus nunc eget neque. Vestibulum porttitor, est eu posuere
        semper, lorem felis egestas metus, vitae luctus nibh leo in urna.
        Pellentesque ante enim, tincidunt at odio quis, facilisis pretium
        tellus. Pellentesque sagittis elit nulla, eget porta dui hendrerit eu.
        Aenean porttitor urna nec varius scelerisque. Aliquam ornare magna nec
        ipsum auctor convallis. Etiam at orci lectus. Nulla suscipit lobortis
        dui, ut dictum tellus finibus eget. Maecenas ac ante enim. Ut at turpis
        tellus. Nunc rutrum augue mattis diam tincidunt, sit amet pulvinar felis
        ornare. Aliquam erat volutpat. Phasellus hendrerit eget urna vitae
        fringilla. Phasellus facilisis turpis ut sem lacinia ultrices. Vivamus
        pharetra eros eget consequat auctor. Maecenas et ante vitae mi fermentum
        convallis vitae vitae diam. Integer luctus in justo vel faucibus. Duis
        at urna posuere, eleifend orci at, facilisis elit. Pellentesque non
        magna velit. Quisque tempus turpis neque, eu venenatis urna porttitor
        quis. Praesent a nisl eu ex rhoncus eleifend. Sed hendrerit velit in
        purus ultricies, ac ullamcorper felis accumsan. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Maecenas ullamcorper ipsum non ultricies fermentum. Aliquam lobortis
        urna luctus est mollis, et vestibulum ligula scelerisque. Etiam iaculis
        nisi in rhoncus mollis. Cras molestie ut ante vitae blandit. Cras ornare
        erat eu tortor imperdiet finibus. Phasellus mauris erat, vulputate id
        nisl nec, tempor faucibus tortor. Praesent eget porta mi. Vestibulum in
        arcu eu ipsum pretium placerat. Proin nisl neque, convallis ac sagittis
        eu, consequat quis est. Cras ut lorem felis. Donec pulvinar cursus
        dictum. Aenean vestibulum, lacus in varius euismod, ipsum nibh pharetra
        urna, eu pharetra diam massa laoreet turpis. In hac habitasse platea
        dictumst. Vestibulum convallis risus sapien. Proin ac turpis ut ex
        pretium cursus ut rutrum est. In tincidunt bibendum mauris eu aliquet.
        Donec est urna, venenatis eget egestas accumsan, finibus sed magna. Sed
        vel nulla a justo feugiat mollis. Fusce ligula dolor, faucibus eget
        tincidunt facilisis, auctor et lectus. Suspendisse potenti. Cras
        bibendum, risus eget cursus vulputate, mi purus suscipit enim, vel
        convallis est ipsum ac lectus. Sed at suscipit neque. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. In non velit rhoncus
        purus dapibus convallis eu a mauris. Duis non ex ligula. Vestibulum eget
        odio malesuada augue lobortis iaculis. Duis pharetra mattis leo non
        molestie. In hac habitasse platea dictumst. Vestibulum id lectus eget
        sapien mollis vehicula. Pellentesque elementum, sem et tempor dapibus,
        justo mauris ullamcorper risus, nec ultricies lorem lorem quis nibh. Sed
        consequat, mi et rhoncus auctor, nisl nulla dapibus metus, iaculis
        feugiat diam dui sit amet tellus. Etiam sit amet ullamcorper orci. Cras
        iaculis imperdiet nulla. Ut aliquet, tellus sit amet ullamcorper
        tincidunt, augue est ultricies justo, sed pellentesque diam massa
        ullamcorper justo. Morbi lacinia at odio in lacinia. Morbi nisi nulla,
        malesuada id augue at, suscipit dictum nulla. Donec quam libero,
        eleifend sodales sapien a, dictum bibendum mauris. Vivamus volutpat
        gravida turpis ac laoreet. Nulla auctor metus massa, eu posuere lacus
        ullamcorper sed. Donec tincidunt tristique suscipit. Nullam ultrices
        ante nec bibendum rhoncus. Vivamus a odio sit amet orci convallis
        ornare. Morbi tincidunt urna leo, vel vulputate massa fringilla ut.
        Aliquam rhoncus sem ut neque viverra, et ultricies ligula ultricies.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Sed nec magna sit amet sem elementum venenatis.
        Nunc non blandit justo, id vestibulum nunc. Suspendisse sit amet ornare
        nulla. Vestibulum non ultricies tortor. Aliquam posuere, erat eget
        imperdiet malesuada, ligula nibh cursus lorem, et porttitor sapien nunc
        nec mi. Vestibulum hendrerit interdum ipsum nec sollicitudin. Quisque
        ullamcorper magna a venenatis porta. Mauris vestibulum faucibus
        condimentum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt
        faucibus vulputate. Cras ultricies odio eget nulla tempor pharetra.
        Quisque elementum, lacus vel maximus rutrum, arcu arcu tempor erat, et
        interdum urna lectus et mauris. Fusce vitae elementum ante, ac sagittis
        mi. Fusce at iaculis odio, sed tempus nisi. Aliquam erat volutpat. Donec
        venenatis nunc id orci rutrum malesuada. Etiam ut ipsum quis metus
        fringilla semper. Mauris facilisis semper lectus eget aliquet. Maecenas
        hendrerit sed massa ultricies porttitor. Fusce elementum neque leo, eu
        consectetur enim porta vitae. Integer id eros velit. In hac habitasse
        platea dictumst. Phasellus facilisis magna at ligula facilisis, at
        ullamcorper orci rutrum. In tincidunt aliquam ex, nec interdum est
        ornare vitae. Nam semper fringilla rhoncus. Vivamus eu euismod ipsum.
        Donec tempus laoreet dolor. Pellentesque at vulputate tortor. Sed
        maximus dui fringilla mi congue porttitor. Vestibulum eleifend enim ut
        rutrum blandit. Integer facilisis congue justo nec tristique. Nam
        pretium, lorem sed molestie rutrum, tellus augue luctus odio, eu
        pulvinar lacus nunc eget neque. Vestibulum porttitor, est eu posuere
        semper, lorem felis egestas metus, vitae luctus nibh leo in urna.
        Pellentesque ante enim, tincidunt at odio quis, facilisis pretium
        tellus. Pellentesque sagittis elit nulla, eget porta dui hendrerit eu.
        Aenean porttitor urna nec varius scelerisque. Aliquam ornare magna nec
        ipsum auctor convallis. Etiam at orci lectus. Nulla suscipit lobortis
        dui, ut dictum tellus finibus eget. Maecenas ac ante enim. Ut at turpis
        tellus. Nunc rutrum augue mattis diam tincidunt, sit amet pulvinar felis
        ornare. Aliquam erat volutpat. Phasellus hendrerit eget urna vitae
        fringilla. Phasellus facilisis turpis ut sem lacinia ultrices. Vivamus
        pharetra eros eget consequat auctor. Maecenas et ante vitae mi fermentum
        convallis vitae vitae diam. Integer luctus in justo vel faucibus. Duis
        at urna posuere, eleifend orci at, facilisis elit. Pellentesque non
        magna velit. Quisque tempus turpis neque, eu venenatis urna porttitor
        quis. Praesent a nisl eu ex rhoncus eleifend. Sed hendrerit velit in
        purus ultricies, ac ullamcorper felis accumsan. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Maecenas ullamcorper ipsum non ultricies fermentum. Aliquam lobortis
        urna luctus est mollis, et vestibulum ligula scelerisque. Etiam iaculis
        nisi in rhoncus mollis. Cras molestie ut ante vitae blandit. Cras ornare
        erat eu tortor imperdiet finibus. Phasellus mauris erat, vulputate id
        nisl nec, tempor faucibus tortor. Praesent eget porta mi. Vestibulum in
        arcu eu ipsum pretium placerat. Proin nisl neque, convallis ac sagittis
        eu, consequat quis est. Cras ut lorem felis. Donec pulvinar cursus
        dictum. Aenean vestibulum, lacus in varius euismod, ipsum nibh pharetra
        urna, eu pharetra diam massa laoreet turpis. In hac habitasse platea
        dictumst. Vestibulum convallis risus sapien. Proin ac turpis ut ex
        pretium cursus ut rutrum est. In tincidunt bibendum mauris eu aliquet.
        Donec est urna, venenatis eget egestas accumsan, finibus sed magna. Sed
        vel nulla a justo feugiat mollis. Fusce ligula dolor, faucibus eget
        tincidunt facilisis, auctor et lectus. Suspendisse potenti. Cras
        bibendum, risus eget cursus vulputate, mi purus suscipit enim, vel
        convallis est ipsum ac lectus. Sed at suscipit neque. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. In non velit rhoncus
        purus dapibus convallis eu a mauris. Duis non ex ligula. Vestibulum eget
        odio malesuada augue lobortis iaculis. Duis pharetra mattis leo non
        molestie. In hac habitasse platea dictumst. Vestibulum id lectus eget
        sapien mollis vehicula. Pellentesque elementum, sem et tempor dapibus,
        justo mauris ullamcorper risus, nec ultricies lorem lorem quis nibh. Sed
        consequat, mi et rhoncus auctor, nisl nulla dapibus metus, iaculis
        feugiat diam dui sit amet tellus. Etiam sit amet ullamcorper orci. Cras
        iaculis imperdiet nulla. Ut aliquet, tellus sit amet ullamcorper
        tincidunt, augue est ultricies justo, sed pellentesque diam massa
        ullamcorper justo. Morbi lacinia at odio in lacinia. Morbi nisi nulla,
        malesuada id augue at, suscipit dictum nulla. Donec quam libero,
        eleifend sodales sapien a, dictum bibendum mauris. Vivamus volutpat
        gravida turpis ac laoreet. Nulla auctor metus massa, eu posuere lacus
        ullamcorper sed. Donec tincidunt tristique suscipit. Nullam ultrices
        ante nec bibendum rhoncus. Vivamus a odio sit amet orci convallis
        ornare. Morbi tincidunt urna leo, vel vulputate massa fringilla ut.
        Aliquam rhoncus sem ut neque viverra, et ultricies ligula ultricies.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Sed nec magna sit amet sem elementum venenatis.
        Nunc non blandit justo, id vestibulum nunc. Suspendisse sit amet ornare
        nulla. Vestibulum non ultricies tortor. Aliquam posuere, erat eget
        imperdiet malesuada, ligula nibh cursus lorem, et porttitor sapien nunc
        nec mi. Vestibulum hendrerit interdum ipsum nec sollicitudin. Quisque
        ullamcorper magna a venenatis porta. Mauris vestibulum faucibus
        condimentum.
      </p>
    </div>
  );
}

export default App;
