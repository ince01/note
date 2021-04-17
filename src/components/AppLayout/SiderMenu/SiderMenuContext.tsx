import React, { useMemo } from 'react';
import { DataNode } from 'antd/lib/tree';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { useGetTreeQuery } from 'generated/graphql';

export type SiderMenuContextType = {
  treeData: DataNode[];
  activeNode: React.Key[];
  onNodeSelect: (selectedKeysValue: React.Key[], info: any) => void;
};

export const SiderMenuContext = React.createContext<SiderMenuContextType>({
  treeData: [],
  activeNode: [],
  onNodeSelect: () => {},
});

export const SiderMenuProvider: React.FC<{}> = ({ children }) => {
  const match = useRouteMatch<{ id: string }>({ path: '/:id', exact: true });
  const history = useHistory();

  const { data } = useGetTreeQuery();

  // TODO: Implement infinite recuision tree
  const treeData = useMemo(
    () =>
      data?.notes.map<DataNode>(({ id, title, children }) => ({
        key: id,
        title,
        children: children.map<DataNode>(({ id, title, children }) => ({
          key: id,
          title,
          children: children.map<DataNode>(({ id, title, children }) => ({
            key: id,
            title,
            children: children.map<DataNode>(({ id, title, children }) => ({
              key: id,
              title,
              children: children.map<DataNode>(({ id, title, children }) => ({
                key: id,
                title,
                children: children.map<DataNode>(({ id, title }) => ({
                  key: id,
                  title,
                })),
              })),
            })),
          })),
        })),
      })) ?? [],
    [data],
  );

  const onNodeSelect = (selectedKeys: React.Key[], info: any) => {
    if (selectedKeys.length > 0) {
      history.push(info.node.key);
    }
  };

  return (
    <SiderMenuContext.Provider
      value={{
        treeData,
        activeNode: match?.params.id ? [match?.params.id] : [],
        onNodeSelect,
      }}
    >
      {children}
    </SiderMenuContext.Provider>
  );
};

export const useSiderMenu = () => React.useContext(SiderMenuContext);
