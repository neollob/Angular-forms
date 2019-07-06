export class FullUser {
  private id: string;
  private realname: string;
  private username: string;
  private password: string;
  private singingUpDate: string;
  private email: string;
  private continent: string;
  private gender: string;
  private upTo18: boolean;
  private languages:Array<string>;
   constructor() {
    this.id = this.uniqueId();
    this.realname = '';
    this.username = '';
    this.password = '';
    this.singingUpDate = this.getActualDate();
    this.email = '';
    this.continent = '';
    this.gender = '';
    this.upTo18 = true;
  }
   /**  * Setters de la clase  */
  public setRealname(realname) {
    this.realname = realname;
  }
  public setUsername(username) {
    this.username = username;
  }
  public setPassword(password) {
    this.password = password;
  }
  public setEmail(email) {
    this.email = email;
  }
  public setContinent(continent) {
    this.continent = continent;
  }
  public setGender(gender) {
    this.gender = gender;
  }
  public setUpTo18(upTo18) {
    this.upTo18 = upTo18;
  }
  public setlanguages(languages) {
    this.languages = languages;
  }
   /**   * Getters de la clase   */
  public getId() {
    return this.id;
  }
  public getRealname() {
    return this.realname;
  }
  public getUsername() {
    return this.username;
  }
  public getPassword() {
    return this.password;
  }
  public getSingingUpDate() {
    return this.singingUpDate;
  }
  public getEmail() {
    return this.email;
  }
  public getContinent() {
    return this.continent;
  }
  public getGender() {
    return this.gender;
  }
  public getUpTo18() {
    return this.upTo18;
  }
  public getLanguages() {
    return this.languages;
  }
   /**   * Generador de id único   */
  private uniqueId() {
    const thisMS: number = Date.now();
    const shake = Math.random();
    let unique: string = Math.pow(thisMS, shake).toString();
    unique = unique.toString().replace('.', thisMS.toString());
    return unique;
  }
   /**   * Obtiene la fecha actual   */
  private getActualDate(): string {
    const actualDate = new Date();
    let actualDay = actualDate.getDate().toString();
    if (actualDay.length < 2) { actualDay = '0' + actualDay; }
    let actualMonth = actualDate.getMonth().toString();
    if (actualMonth.length < 2) { actualMonth = '0' + actualMonth; }
    const actualYear = actualDate.getFullYear().toString();
    const finalDate = actualDay + '-' + actualMonth + '-' + actualYear;
    return finalDate;
  }
}
