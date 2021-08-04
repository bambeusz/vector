class Vector {
  public components: number[];

  constructor(...components: number[]) {
    this.components = components;
  }

  public add(v: Vector): Vector {
    if (v.components.length !== this.components.length) {
      throw new Error("Problem");
    }

    return new Vector(
      ...v.components.map((component, index) => this.components[index] + component)
    );
  }

  public subtract(v: Vector): Vector {
    if (v.components.length !== this.components.length) {
      throw new Error("Problem");
    }

    return new Vector(
      ...v.components.map((component, index) => this.components[index] - component)
    );
  }

  public scaleBy(n: number): Vector {
    return new Vector(
      ...this.components.map(component => component * n)
    );
  }

  public get length(): number {
    return Math.hypot(...this.components);
  }

  public dotProduct(v: Vector): number {
    return v.components
      .map((component, index) => this.components[index] * component)
      .reduce((acu, component) => acu + component, 0);
  }

  public crossProduct(v: Vector): Vector {
    if (this.length !== 3 || v.length !== 3) {
      throw new Error("Problem");
    }

    return new Vector(
      this.components[1] * v.components[2] - this.components[2] * v.components[1],
      this.components[2] * v.components[0] - this.components[0] * v.components[2],
      this.components[0] * v.components[1] - this.components[1] * v.components[0]
    );
  }
}
