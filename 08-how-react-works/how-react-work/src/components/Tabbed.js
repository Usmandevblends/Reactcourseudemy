import React, { useState } from "react";
import Tab from "./Tab";
import TabContent from "./TabContent";
import DifferentContent from "./DifferentContent";

function Tabbed({ content }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tabs">
        {content.map((_, index) => (
          <Tab
            key={index}
            num={index}
            activeTab={activeTab}
            onClick={setActiveTab}
          />
        ))}
        <Tab
          key={content.length}
          num={content.length}
          activeTab={activeTab}
          onClick={setActiveTab}
        />
      </div>

      {activeTab < content.length ? (
        <TabContent item={content[activeTab]} />
      ) : (
        <DifferentContent />
      )}
    </div>
  );
}

export default Tabbed;

