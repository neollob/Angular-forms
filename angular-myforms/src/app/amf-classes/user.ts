export class User {
  private id: string;
  private username: string;
  private password: string;
  constructor() {
    this.id = this.uniqueId();
    this.username = '';
    this.password = '';
  }
  public setUsername(username) { this.username = username; }
  public setPassword(password) { this.password = password; }
  public getId() { return this.id; }
  public getUsername() { return this.username; }
  public getPassword() { return this.password; }
  private uniqueId() {
    const thisMS: number = Date.now();
    const shake = Math.random();
    let unique: string = Math.pow(thisMS, shake).toString();
    unique = unique.toString().replace('.', thisMS.toString());
    return unique;
  }
}
