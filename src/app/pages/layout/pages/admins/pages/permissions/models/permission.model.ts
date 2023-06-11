export class AccessData {
  scope: string = '';
  title: string = '';
  isAdd: boolean = false;
  isView: boolean = false;
  isEdit: boolean = false;
  isStatus: boolean = false;
  isDelete: boolean = false;
  actions!: Set<string>;
}

export class Permission {
  static parse(partial: Permission) {
    const permission = new Permission();
    permission.id = partial.id;
    permission.title = partial.title;
    permission.updatedAt = new Date(partial.updatedAt);
    permission.createdAt = new Date(partial.createdAt);
    permission.access = partial.access?.map((access) => {
      const actions = new Set<string>(access.actions);
      const result = {
        actions,
        scope: access.scope,
        title: '',
        isAdd: actions.has('ADD'),
        isView: actions.has('VIEW'),
        isEdit: actions.has('EDIT'),
        isStatus: actions.has('STATUS'),
        isDelete: actions.has('DELETE'),
      };
      if (access.scope === '1') {
        result.title = 'System User';
      } else if (access.scope === '2') {
        result.title = 'Employee User';
      }
      return result;
    });
    return permission;
  }
  id: string = '';
  title: string = '';
  access: AccessData[] = [];
  updatedAt: Date = new Date();
  createdAt: Date = new Date();
}
